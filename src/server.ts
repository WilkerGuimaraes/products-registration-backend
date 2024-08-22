import fastify from "fastify";
import fastifyCors from "@fastify/cors";

import { createProduct } from "./routes/create-product";
import { getProducts } from "./routes/get-products";
import { deleteProduct } from "./routes/delete-product";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "DELETE"],
});

app.register(createProduct);
app.register(getProducts);
app.register(deleteProduct);

app.listen({ port: 3333 }).then(() => console.log("HTTP server running!"));
