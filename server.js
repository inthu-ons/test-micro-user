const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const {service} = require('./api/api');
app.get('/service', service);

app.listen(2000 , () => {
    console.log('เชื่อมต่อพอร์ต 2000 แล้ว');
} )