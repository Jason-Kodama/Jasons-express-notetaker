const express = require('express')
const path = require('path')
const notes = require('./db/db.json')
const PORT = 3001;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.post('/notes', (req, res) => {
    console.info(`${req.method} request received`)
})
app.listen(PORT, () =>
    console.log(`app listening at http://localhost:${PORT}`)
);