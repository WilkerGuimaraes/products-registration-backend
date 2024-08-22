import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "../lib/prisma";
import { ClientError } from "../errors/client-error";

export async function getProducts(app: FastifyInstance) {
  app.get("/products", async (request, reply) => {
    const searchParams = z.object({
      id: z.string().cuid().optional(),
      name: z.string().optional(),
      page: z.string().regex(/^\d+$/).optional(),
    });

    const { id, name, page } = searchParams.parse(request.query);

    const currentPage = page ? parseInt(page, 10) : 1;
    const offset = (currentPage - 1) * 20;
    const products = await prisma.product.findMany({
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
      return new ClientError("Product not found or not exist.");
    }

    const count = await prisma.product.count({
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
