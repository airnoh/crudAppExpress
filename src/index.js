const express = require('express');
const createRouter = require('./routes/create');


const app= express();
const PORT = 3000;
app.use(express.json());

app.use('/create', createRouter);

app.listen( PORT, () => console.log('listening on port ${PORT}') );