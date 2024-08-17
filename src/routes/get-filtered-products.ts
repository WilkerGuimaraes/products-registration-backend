import { FastifyInstance } from "fastify";
import z from "zod";

import { prisma } from "../lib/prisma";

export async function getFilteredProducts(app: FastifyInstance) {
  app.get("/products/search", async (request, reply) => {
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
        createdAt: "desc",
      },
      take: 20,
      skip: offset,
    });

    return reply.send({ products });
  });
}
