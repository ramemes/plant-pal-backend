const express = require("express");
const plantsRouter = express.Router();

const {
  postPlant,
  getPlants,
} = require("../controllers/plantControllers");

plantsRouter.route("/").post(postPlant).get(getPlants);


module.exports = plantsRouter;
