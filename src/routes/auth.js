const { Router } = require("express");
const User = require("../database/schemas/User");
const { hashPassword } = require("../utils/bcrypt");

const router = Router();

// const User = [
//     {
//         username: "airnoh",
//         password: 123456,
//         email: "enobong@gmail.com"
//     }
// ];

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
  }
});

// router.post('/register',async (req, res) => {
//     const {username, email} = req.body;
//     const userDB = await User.find((user) => user.username ===username && user.email === email);
//     if(userDB){
//         res.status(400).send({message: 'User already registered'})
//     }else{
//         const password = hashPassword(req.body.password);
//         console.log(password);
//         const newUser = await User.push(username, password, email);
//         res.sendStatus(201)
//     }
// });

router.post("/register", async (req, res) => {
  const { username, email } = req.body;
  const userDB = await User.findOne({ $or: [{ username }, { email }] });
  if (userDB) {
    res.status(400).send({ message: " User already registered" });
  } else {
    const password = hashPassword(req.body.password);
    console.log(password);
    const newUser = await User.create({ username, password, email });
    res.sendStatus(201);
  }
});

module.exports = router;
