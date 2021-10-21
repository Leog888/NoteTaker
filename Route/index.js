const miniApp = require('express').Router();

// Import the routers for notetaker
const notetakerRouter = require('./notetaker');

miniApp.use('/notetaker', notetakerRouter);

module.exports = miniApp;