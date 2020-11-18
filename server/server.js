const express = require('express');
const cors = require('cors');
// const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

//Router Object
const router = express.Router();

const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

require('./app/routes')(app, router);

app.listen(port, () => {
    console.log("Live on port : " + port);
})   

