const { Router } = require("express");
const Todo = require("../database/schemas/Todo");
const router = Router();

// const todoList = [
//   {
//     message: " wash your clothes",
//     id: 1,
//   },
//   {
//     message: "pick my sister",
//     id: 2,
//   },
// ];

// router.get("/", function (req, res) {
//   res.send(Todo);
// });



// get the todos stored in the database
router.get("/", function (req, res) {
  Todo.find({}).then((todos) => {
    res.status(200).send(todos);
  });
});



// router.get("/:id", function (req, res) {
//   const idToGet = parseInt(req.params.id);
//   const todoIndex = todoList.find((g) => g.id === idToGet);
//   res.send(todoIndex);
// });



// get the todos stored in the database by id
router.get("/:id", function(req, res){
    const idToGet = (req.params.id);
    Todo.findById(idToGet)
    .then((todos) => {
        if(!todos){
            res.status(404).send({message: "Not Found"});
        }else{
            res.status(200).send(todos);
        }
    })
    .catch((err) => {
        console.log(err);
    })
})

// router.post("/", function (req, res) {
//   todoList.push(req.body);
//   res.sendStatus(201);
// });


// create a new todo and add it to the database
router.post("/", async (req, res) => {
  const { task } = req.body;
  const todoDB = await Todo.findOne({ task });
  if (todoDB) {
    res.send({ message: "Todo already exist" });
  } else {
    const newTodo = await Todo.create({ task });
    res.sendStatus(201);
  }
});


// router.delete("/:id", (req, res) => {
//   const idToDelete = (req.params.id);
//   const deleteRequest = todoList.findIndex((id) => id === idToDelete);
//   todoList.splice(deleteRequest, 1);
//   res.sendStatus(204);
// });


// delete a todo from the database by its id
router.delete("/:id", async (req,res) => {
    const idToDelete = (req.params.id);
    const deleteRequest= Todo.findById(idToDelete)
    .then((todos) => {
        if(todos){
            deleteRequest.removeById;
            res.status(204).send({message: "No Content"});
        }else{
            res.status(404).send({message: 'Not found'});
        }
    })
    .catch((err) => {
        console.log(err);
    })
});

// update a todo from the database by its id
router.put("/:id", async ( req,res) =>{
    const idToUpdate = req.params.id;
    const updatedTodo = req.body;
    // find the id of the todo
    Todo.findById(idToUpdate)

    // If the item is found, update it; otherwise, respond with a 404 Not Found status
    
    
});

// router.put("/:id", function (req, res) {
//   const itemId = parseInt(req.params.id);
//   const updatedItem = req.body;

//   // Find the index of the item with the specified ID
//   const itemIndex = todoList.findIndex((item) => item.id === itemId);

//   // If the item is found, update it; otherwise, respond with a 404 Not Found status
//   if (itemIndex !== -1) {
//     todoList[itemIndex] = updatedItem;
//     res.sendStatus(204); // 204 No Content indicates success with no response body
//   } else {
//     res.sendStatus(404); // 404 Not Found if the item is not in the list
//   }
// });

module.exports = router;
