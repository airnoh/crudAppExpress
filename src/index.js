const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const createRouter = require("./routes/create");
const authRouter = require("./routes/auth");
const { hashPassword } = require("./utils/bcrypt");

require("./database");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/create", createRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
