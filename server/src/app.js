const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

// get all routers here
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');
const app = express();

app.use(
    cors({
        // origin: 'http://localhost:3000',
        origin: '*',
    })
);

app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

//? testing purpose only
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    // res.status(200).json({
    //     message: 'server okay',
    // });
});

module.exports = app;
