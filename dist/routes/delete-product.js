"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../lib/prisma");
async function deleteProduct(app) {
    app.delete("/products/:id", async (request, reply) => {
        try {
            const deleteProcutsParams = zod_1.z.object({
                id: zod_1.z.string(),
            });
            const { id } = deleteProcutsParams.parse(request.params);
            await prisma_1.prisma.product.delete({
                where: {
                    id,
                },
            });
            return reply.status(204).send();
        }
        catch (error) {
            return reply.status(404).send("Product not found or not exist.");
        }
    });
}
exports.deleteProduct = deleteProduct;
