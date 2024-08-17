import fastify from "fastify";

import { createProduct } from "./routes/create-product";
import { getProducts } from "./routes/get-products";

const app = fastify();

app.register(createProduct);
app.register(getProducts);

app.listen({ port: 3333 }).then(() => console.log("HTTP server running!"));
