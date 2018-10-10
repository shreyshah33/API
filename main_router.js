const express = require('express');
var { List, ListItem } = require('./list'); // Import our List and ListItem classes from list.js

// Create an express router 
var router = express.Router();

// Our temporary storage of Lists in our application
var lists = [];

router.get('/', (req, res) => {
    res.send('Hello World');
});

// Returns a list of all of our lists
router.get('/lists', (req, res) => {
    res.json({
        lists: lists
    });
});

// Adds a list
router.post('/lists', (req, res) => {
    let body = req.body;
    let listId = body.id;
    let listName = body.name;
    let newList = new List(listId, listName);
    lists.push(newList);
    res.send(`${listId}: ${listName}`);
});

// Returns the list information in the specified list
router.get('/lists/:id', (req,res) => {
    // Get the id from path
    let listId = req.params.id;             // get the id from the request path
    // Find the item in the list
    for(let i=0; i<lists.length; i++) {     // find a list with the given id
        let list = lists[i];
        if(list.id == listId) {             // using == b/c listId is a string and list.id is a number
            res.json({ listId: list});
            return;
        }
    }
    res.send("Could not find list");        // will return this if list isn't found

});

// Adds an item to the specified list
router.post('/lists/:id', (req, res) => {
    let body = req.body;
    let listId = req.params.id;
    // Find the item in the list
    for(let i=0; i<lists.length; i++) {
        let list = lists[i];
        if(list.id == listId) {             // used == instead of === because list.id is a number and listId is a string
            let listItem = new ListItem(body.id, body.name, body.description);
            list.items.push(listItem);
            res.send('Got it');
            return;
        }
    }
    res.send("Could not find a list");
});

module.exports = router;