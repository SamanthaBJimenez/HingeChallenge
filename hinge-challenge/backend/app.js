const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;
const app = express();

const usersRouter = require('./routes/Users');
const photosRouter = require('./routes/Photos');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/photos', photosRouter);

app.listen(port,() => {
    console.log('Listening on Port ' + port)
});