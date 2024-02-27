const express = require("express");
const plantsRouter = express.Router();

const {
  postPlant,
  getPlants,
  getPlantById,
} = require("../controllers/plantControllers");

plantsRouter.route("/").post(postPlant).get(getPlants);


plantsRouter.route("/:plant_id").get(getPlantById);
module.exports = plantsRouter;