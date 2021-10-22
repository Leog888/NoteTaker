const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const { readFromFile, readAndAppend } = require('./Helper/fsUtilis');
const { v4:uuid } = require('uuid');


// Middleware to parse the data and urlencoded from data
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static('public'));


// Get route for homepage 
app.get('/', (req, res) => 
    res.sendDate(path.join(__dirname, '/public/index.html'))
);

// Get Route for feedback page 
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)

// Get Route for retrieving all the notetaker 
app.get('/api/notes', (req, res) =>{
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)))
});

// Post for saving the notes
app.post('/api/notes', (req, res) =>{

// 
    const { title, text } = req.body;
// If one of the the required properties are present
    if( title || text || id) {
        // Variable for the object will save
        const newNotetaker = {
            title: title,
            text: text,
            id: uuid(),
        };
        readAndAppend(newNotetaker, './db/db.json');

        const response = {
            status: 'Succes',
            body: newNotetaker,
        };

        res.json(response);
    }});

    app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)
);