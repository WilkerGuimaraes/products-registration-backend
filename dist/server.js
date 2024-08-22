"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const create_product_1 = require("./routes/create-product");
const get_products_1 = require("./routes/get-products");
const delete_product_1 = require("./routes/delete-product");
const app = (0, fastify_1.default)();
app.register(cors_1.default, {
    origin: "*",
    methods: ["GET", "POST", "DELETE"],
});
app.register(create_product_1.createProduct);
app.register(get_products_1.getProducts);
app.register(delete_product_1.deleteProduct);
app
    .listen({ host: "0.0.0.0", port: process.env.PORT ?? 3333 })
    .then(() => console.log("HTTP server running!"));
