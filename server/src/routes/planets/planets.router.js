const express = require('express');
const { getAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();

//! user > view > router > controller > model
//? router -> controller (1 to 1 relation)
//? controller -> model (1 to many relation)
planetsRouter.get('/', getAllPlanets);

module.exports = planetsRouter;
