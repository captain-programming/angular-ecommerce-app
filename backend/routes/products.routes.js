const { Router } = require("express");
const { allProducts } = require("../controller/products.controller");

const productsRouter = Router();

productsRouter.get("/all-products", allProducts);

module.exports = productsRouter;