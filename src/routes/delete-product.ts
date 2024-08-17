import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "../lib/prisma";

export async function deleteProduct(app: FastifyInstance) {
  app.delete("/products/:id", async (request, reply) => {
    const deleteProcutsParams = z.object({
      id: z.string(),
    });

    const { id } = deleteProcutsParams.parse(request.params);

    await prisma.product.delete({
      where: {
        id,
      },
    });

    return reply.status(204).send();
  });
}
