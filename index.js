const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('ToDo Server is running');
})

app.listen(port, (req, res) => {
    console.log('ToDO Server is running on port, ', port)
})