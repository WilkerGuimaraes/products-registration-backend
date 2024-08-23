import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import dotenv from "dotenv";

import { createProduct } from "./routes/create-product";
import { getProducts } from "./routes/get-products";
import { deleteProduct } from "./routes/delete-product";

dotenv.config();

const app = fastify();

app.register(fastifyCors, {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "DELETE"],
});

app.register(createProduct);
app.register(getProducts);
app.register(deleteProduct);

app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => console.log("HTTP server running!"));
