// ! controller can interact with many models

const { planets } = require('../../models/planets.model');

function getAllPlanets(req, res) {
    // console.log('getAllPlanets', planets);
    // console.log('getAllPlanets', req.url);
    return res.status(200).json({ planets });
}

module.exports = { getAllPlanets };
