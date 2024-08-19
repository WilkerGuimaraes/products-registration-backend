import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "../lib/prisma";

export async function createProduct(app: FastifyInstance) {
  app.post("/products", async (request, reply) => {
    try {
      const productSchema = z.object({
        name: z.string().min(4),
        price: z.number(),
      });

      const { name, price } = productSchema.parse(request.body);

      const product = await prisma.product.create({
        data: {
          name,
          price,
        },
      });

      return reply.status(201).send({ productId: product.id });
    } catch (error) {
      return reply.status(400).send("Bad Request in the product data.");
    }
  });
}
