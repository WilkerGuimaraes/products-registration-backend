import fastify from "fastify";

import { createProduct } from "./routes/create-product";
import { getProducts } from "./routes/get-products";
import { getFilteredProducts } from "./routes/get-filtered-products";
import { deleteProduct } from "./routes/delete-product";

const app = fastify();

app.register(createProduct);
app.register(getProducts);
app.register(getFilteredProducts);
app.register(deleteProduct);

app.listen({ port: 3333 }).then(() => console.log("HTTP server running!"));
