const notetaker = require('express').Router();
const { readAndAppend, readFromFile } = require('../Helper/fsUtilis');


// Get Route for retrieving all the notetaker 
notetaker.get('/', (req, res) =>{
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)))
});

notetaker.post('/', (req, res) =>{
    const {  } = req.body;

    
})