const Cart = require(`../models/cart-model`);

const createNewCart = async (req, res) => {
  try{
    let newCart = new Cart(req.body);

    await newCart.save((error, data) => {
      if(error){
        console.log(error);
      }else{
        res.status(200).send({
          response: "The cart has been created successfully"
        });
      }
    });
  } catch(err){
    console.log(err);
  }
}

const findAllCarts = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try{
    const allCarts = await Cart.find({}).lean().exec();
    res.status(200).send({
      response: allCarts
    })
  } catch(err){
    console.log(err);
  }
}

const findById = async (req, res) => {
  try{
    const cart = await Cart.findById(req.params.cartId).lean().exec();
    res.status(200).send({
      response: cart
    })
  }catch(err){}
}

const deleteCartById = async (req, res) => {
  try{ console.log(req.params);
    await Cart.deleteOne({"_id":req.params.cartId})
    res.status(200).send({
      response: "The cart has been deleted successfully"
    });
  }catch(err){}
}

const updateCartById = async (req, res) => {
  try{
    await Cart.findOneAndUpdate({"_id":req.params.cartId}, req.body).lean().exec();
    res.status(200).send({
      response: "The Cart has been updated successfully"
    });

  }catch(err){}
}

module.exports = {
  createNewCart,
  findAllCarts,
  deleteCartById,
  findById,
  updateCartById
}