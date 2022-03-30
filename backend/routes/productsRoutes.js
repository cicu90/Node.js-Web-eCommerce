const Router = require("express").Router;
const { createNewProduct, findAllProducts, deleteProductById, findById, updateProductById } = require("../controllers/product-controller");

const ProductRouter = Router();

ProductRouter.get("/findAll", findAllProducts);
ProductRouter.get("/findById/:productId", findById);
ProductRouter.post("/create", createNewProduct);
ProductRouter.patch("/update/:productId", updateProductById);
ProductRouter.delete("/delete/:productId", deleteProductById);

module.exports = ProductRouter;