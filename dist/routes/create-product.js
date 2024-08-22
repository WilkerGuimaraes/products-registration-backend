"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../lib/prisma");
async function createProduct(app) {
    app.post("/products", async (request, reply) => {
        try {
            const productSchema = zod_1.z.object({
                name: zod_1.z.string().min(4),
                price: zod_1.z.number(),
            });
            const { name, price } = productSchema.parse(request.body);
            const product = await prisma_1.prisma.product.create({
                data: {
                    name,
                    price,
                },
            });
            return reply.status(201).send({ productId: product.id });
        }
        catch (error) {
            return reply.status(400).send("Bad Request in the product data.");
        }
    });
}
exports.createProduct = createProduct;
