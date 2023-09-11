const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    id: {
     type: mongoose.SchemaTypes.ObjectId,
    },
  task: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  createdAt: {
    type: mongoose.SchemaTypes.Date,
    required: true,
    default: new Date(),
  },
});

module.exports = mongoose.model('todos', TodoSchema);
