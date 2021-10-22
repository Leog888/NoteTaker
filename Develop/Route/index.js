const miniApp = require('express').Router();

// Import the routers for notetaker
const notetakerRouter = require('./notetaker');

miniApp.use('/nt', notetakerRouter);

module.exports = miniApp;