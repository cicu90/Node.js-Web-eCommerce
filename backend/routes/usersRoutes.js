const Router = require("express").Router;

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send({data:'respond with a resource'});
// });

// module.exports = router;


const userController = require("./controllers/user-controller");

const UserRouter = Router();

UserRouter.get("/", userController.getUsers);
UserRouter.get("/:userId", userController.getUserDetails);
UserRouter.post("/", userController.createUser);
UserRouter.patch("/:userId", userController.updateUser);
UserRouter.delete("/:userId", userController.deleteUser);

module.exports = UserRouter;
