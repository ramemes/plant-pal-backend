const express = require("express");
const plantsRouter = express.Router();

const {
  postPlant,
  getPlants,
  deletePlant,
} = require("../controllers/plantControllers");

plantsRouter.route("/").post(postPlant).get(getPlants);

plantsRouter.route("/:plant_id").get(deletePlant);

module.exports = plantsRouter;
