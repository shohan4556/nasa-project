const launchMap = new Map();

let latestFlightNumber = 101;

const launch = {
    flightNumber: 101,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 17, 2030'),
    target: 'Kepler-442 b',
    customer: ['Shohan', 'NASA'],
    upcoming: true,
    success: true,
};

// key value pairs
launchMap.set(launch.flightNumber, launch);

// add new launch to map (POST)
function addNewLaunch(launch) {
    latestFlightNumber += 1;
    launchMap.set(
        latestFlightNumber,
        Object.assign(launch, {
            flightNumber: latestFlightNumber,
            upcoming: true,
            success: true,
            customer: ['Shohan', 'NASA'],
        })
    );
}

function isLaunchExists(id) {
    console.log(launchMap.has(id));
    return launchMap.has(id);
}

function abortLaunchById(id) {
    launchMap.delete(id);
}

module.exports = {
    launchMap,
    addNewLaunch,
    isLaunchExists,
    abortLaunchById,
};
