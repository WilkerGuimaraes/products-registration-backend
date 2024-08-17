import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function getProducts(app: FastifyInstance) {
  app.get("/products/:page", async (request, reply) => {
    const getProcutsParams = z.object({
      page: z.string().regex(/^\d+$/), // apenas números inteiros
    });

    const { page } = getProcutsParams.parse(request.params);

    const currentPage = parseInt(page, 10); // converte para número inteiro
    const offset = (currentPage - 1) * 20; // calcula o offset

    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 20,
      skip: offset,
    });

    return reply.send({ products });
  });
}
