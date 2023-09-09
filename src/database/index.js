const mongoose = require("mongoose");

const dburl = "mongodb://0.0.0.0:27017/crudApp";
mongoose
  .connect(dburl)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error(err));
