const express = require('express');
const path = require('path');
const api = require('./Route/index');
const app = express();
const PORT = 3001;


// Middleware to parse the data and urlencoded from data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', api);

app.use(express.static('public'));


// Get route for homepage 
app.get('/', (req, res) => 
    res.sendDate(path.join(__dirname, '/public/index.html'))
);

// Get Route for feedback page 
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)
);
