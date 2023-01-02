const express = require('express');
const { getAllLaunches, httpAddNewLaunch, httpAbortLaunch } = require('./launches.controller');
const launchesRouter = express.Router();

launchesRouter.get('/', getAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;
