const { launchMap, addNewLaunch, isLaunchExists, abortLaunchById } = require('../../models/launches.model');

function getAllLaunches(req, res) {
    const jsonForm = Array.from(launchMap.values());
    // for (const value of launchMap.values()) {
    //     console.log(value);
    // }
    return res.status(200).json(jsonForm);
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;
    if (!launch.mission || !launch.target || !launch.launchDate || !launch.rocket) {
        return res.status(400).json({
            error: 'Bad request',
        });
    }
    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid Launch Date',
        });
    }
    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);
    console.log(req.params.id);
    console.log('launchId', launchId, launchMap.get(launchId));

    if (!isLaunchExists(launchId)) {
        return res.status(404).json({ error: 'Launch not found' });
    }
    abortLaunchById(launchId);
    return res.status(200).json({ message: 'Launch aborted!' });
}

module.exports = { getAllLaunches, httpAddNewLaunch, httpAbortLaunch };
