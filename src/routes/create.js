const { Router } = require('express');
const router = Router();

const todoList = [
    {
        message: " wash your clothes",
        id: 1
    },
    {
        message: "pick my sister",
        id: 2
    },
];

router.get('/', function (req, res) {
    res.send(todoList);
})
router.post('/', function (req, res) {
    todoList.push(req.body);
    res.sendStatus(201);
})
router.delete('/:id', (req , res) => {
    const idToDelete = parseInt(req.params.id);
     const deleteRequest = todoList.findIndex((id) => id === idToDelete);
     todoList.splice(deleteRequest,1);
     res.sendStatus(204);
})

router.put('/:id', function (req, res) {
    const itemId = parseInt(req.params.id);
    const updatedItem = req.body;

    // Find the index of the item with the specified ID
    const itemIndex = todoList.findIndex(item => item.id === itemId);

    // If the item is found, update it; otherwise, respond with a 404 Not Found status
    if (itemIndex !== -1) {
        todoList[itemIndex] = updatedItem;
        res.sendStatus(204); // 204 No Content indicates success with no response body
    } else {
        res.sendStatus(404); // 404 Not Found if the item is not in the list
    }
});

module.exports = router;


module.exports = router;