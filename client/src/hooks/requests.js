const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
    // TODO: Once API is ready.
    // Load planets and return as JSON.
    const response = await fetch(`${API_URL}/planets`);
    // .then((res) => {
    //     res.json();
    // })
    // .then((data) => {
    //     console.log('planets', data);
    // });
    // const data = await response.json();
    // console.log('planets >>', data);
    return await response.json();
}

async function httpGetLaunches() {
    // TODO: Once API is ready.
    // Load launches, sort by flight number, and return as JSON.
    const response = await fetch(`${API_URL}/launches`);
    const fetchedData = await response.json();
    console.log('launches', fetchedData);
    return fetchedData.sort((a, b) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
    // Submit given launch data to launch system.
    console.log('launch', launch);
    try {
        return await fetch(`${API_URL}/launches`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(launch),
        });
    } catch (err) {
        return {
            ok: false,
        };
    }
}

async function httpAbortLaunch(id) {
    // TODO: Once API is ready.
    // Delete launch with given ID.
    try {
        return await fetch(`${API_URL}/launches/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (err) {
        return {
            ok: false,
        };
    }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
