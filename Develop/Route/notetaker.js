const nt = require('express').Router();
const { readAndAppend, readFromFile } = require('../Helper/fsUtilis');


// Get Route for retrieving all the notetaker 
// nt = notetaker
nt.get('/', (req, res) =>{
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)))
});

// Post for saving the notes
nt.post('/', (req, res) =>{

// 
    const { title, text } = req.body;
// If one of the the required properties are present
    if( title || text) {
        // Variable for the object will save
        const newNotetaker = {
            title,
            text,
        };
        readAndAppend(newNotetaker, './db/db.json');

        const response = {
            status: 'Succes',
            body: newNotetaker,
        };

        res.json(response);
    }});

    module.exports = nt;