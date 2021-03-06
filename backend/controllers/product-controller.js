const Product = require(`../models/products-models`);

const createNewProduct = async (req, res) => {
  try{
    res.header("Access-Control-Allow-Origin", "*");
    let newProduct = new Product(req.body);

    await newProduct.save((error, data) => {
      if(error){
        console.log(error);
      }else{
        res.status(200).send({
          response: "The product has been created successfully"
        });
      }
    });
  } catch(err){
    console.log(err);
  }
}

const findAllProducts = async (req, res) => {
  try{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const allProducts = await Product.find({}).lean().exec();
    res.status(200).send({
      response: allProducts
    })
  } catch(err){
    console.log(err);
  }
}

const findById = async (req, res) => {
  try{
    res.header("Access-Control-Allow-Origin", "*");
    const product = await Product.findById(req.params.productId).lean().exec();
    res.status(200).send({
      response: product
    })
  }catch(err){}
}

const deleteProductById = async (req, res) => {
  try{
    res.header("Access-Control-Allow-Origin", "*");
    await Product.deleteOne({"_id":req.params.productId})
    res.status(200).send({
      response: "The product has been deleted successfully"
    });
  }catch(err){}
}

const updateProductById = async (req, res) => {
  try{
    res.header("Access-Control-Allow-Origin", "*");
    await Product.findOneAndUpdate({"_id":req.params.productId}, req.body).lean().exec();
    res.status(200).send({
      response: "The product has been updated successfully"
    });

  }catch(err){}
}

module.exports = {
  createNewProduct,
  findAllProducts,
  deleteProductById,
  findById,
  updateProductById
}