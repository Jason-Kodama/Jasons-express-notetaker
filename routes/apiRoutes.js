const router = require('express').Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

router.get('/notes',  (req, res) => {
    console.log('getting')
    fs.readFile('db/db.json', 'utf-8',(err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
      });
});

router.delete("/notes/:id", (req, res) => {
	fs.readFile("db/db.json", (err, data) => {
		if (err) throw err;
		let json = JSON.parse(data);
		let notes = json.filter((note) => note.id !== req.params.id);
		console.log(notes);
		fs.writeFile("db/db.json", JSON.stringify(notes), function (err) {
			if (err) throw err;
			res.redirect("/notes");
		});
	});
});

router.post('/notes',  (req, res) => {
    console.log('getting')
    fs.readFile('db/db.json', 'utf-8',(err, data) => {
        if (err) throw err;
        let parsedData = JSON.parse(data);
        let {text , title} = req.body
        let id = uuidv4()
        let newNote = {
            text, title, id
        }
        parsedData.push(newNote)
        fs.writeFile('db/db.json', JSON.stringify(parsedData), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
            res.end()
          });
      });
});

module.exports = router