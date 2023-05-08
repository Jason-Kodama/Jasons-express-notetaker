const express = require('express')
const path = require('path')
const apiRouter = require('./routes/apiRoutes')
const PORT = 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRouter)

app.get('/notes', (req, res) => {
res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.listen(PORT, () =>
    console.log(`app listening at http://localhost:${PORT}`)
);