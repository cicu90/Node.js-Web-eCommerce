const Router = require("express").Router;
const { createNewCart, findAllCarts, deleteCartById, findById, updateCartById } = require("../controllers/cart-controller");

const CartRouter = Router();

CartRouter.get("/findAll", findAllCarts);
CartRouter.get("/findById/:cartId", findById);
CartRouter.post("/create", createNewCart);
CartRouter.patch("/update/:cartId", updateCartById);
CartRouter.delete("/delete/:cartId", deleteCartById);

module.exports = CartRouter;