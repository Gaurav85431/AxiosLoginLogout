const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

app.use(express.json());


app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/NewPracticeMERN')

const routes = require('./Routes/UserRoutes');
app.use('/api', routes);




let port = 3000;

app.listen(port, () => {
  console.log("Server Start");

})
