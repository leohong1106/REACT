const express = require('express');
const fs = require('fs');
const cors= require('cors');
const app = express();
const apirouter = require('./routes/apirouter')();
const port = 5002;

global.sampleCarList = [];


if(fs.existsSync('./data/carlist.json')) {
    let rawdata = fs.readFileSync('./data/carlist.json')
    sampleCarList = JSON.parse(rawdata);
    console.log(sampleCarList);
}

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors());

app.use('/api', apirouter);

app.listen(port, () => {
    console.log('Server listening...', port);
})