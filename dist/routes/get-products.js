"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../lib/prisma");
const client_error_1 = require("../errors/client-error");
async function getProducts(app) {
    app.get("/products", async (request, reply) => {
        const searchParams = zod_1.z.object({
            id: zod_1.z.string().cuid().optional(),
            name: zod_1.z.string().optional(),
            page: zod_1.z.string().regex(/^\d+$/).optional(),
        });
        const { id, name, page } = searchParams.parse(request.query);
        const currentPage = page ? parseInt(page, 10) : 1;
        const offset = (currentPage - 1) * 20;
        const products = await prisma_1.prisma.product.findMany({
            where: {
                id,
                name: {
                    contains: name?.toLocaleLowerCase(),
                    mode: "insensitive",
                },
            },
            orderBy: {
                createdAt: "asc",
            },
            take: 20,
            skip: offset,
        });
        if (products.length === 0) {
            return new client_error_1.ClientError("Product not found or not exist.");
        }
        const count = await prisma_1.prisma.product.count({
            where: {
                id,
                name: {
                    contains: name?.toLocaleLowerCase(),
                    mode: "insensitive",
                },
            },
        });
        return reply.send({ products, count });
    });
}
exports.getProducts = getProducts;
