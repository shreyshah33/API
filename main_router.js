const express = require('express');

var router = express.Router();

var lists = [];

router.get('/', (req,res) => {
    res.send('Hello World');
});

router.get('/lists', (req, res) => {
    res.json({
        lists: lists
    });
});


router.post('/lists', (req, res) => {
    var body = req.body;
    console.log()
    var listId = body.id;
    var listName = body.name;
    var newList= List(listId,listName);
    lists.push(newList)
    res.send(`${listID}: ${listName}`);
});

module.exports = router;