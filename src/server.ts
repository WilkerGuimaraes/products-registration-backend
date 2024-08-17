import fastify from "fastify";

import { createProduct } from "./routes/create-product";

const app = fastify();

app.get("/", () => {
  return "Hello World!";
});

app.register(createProduct);

app.listen({ port: 3333 }).then(() => console.log("HTTP server running!"));
