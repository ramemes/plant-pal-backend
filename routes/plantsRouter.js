const express = require("express");
const plantsRouter = express.Router();

const {
  postPlant,
  getPlants,
<<<<<<< HEAD
=======
  getPlantById,
>>>>>>> 25a01b409f2f2a3f54cfb6fe88e7bdd2369de7ae
} = require("../controllers/plantControllers");

plantsRouter.route("/").post(postPlant).get(getPlants);

<<<<<<< HEAD
=======
plantsRouter.route("/:plant_id").get(getPlantById);
>>>>>>> 25a01b409f2f2a3f54cfb6fe88e7bdd2369de7ae

module.exports = plantsRouter;