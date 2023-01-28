const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json('Hi');
})

app.get('/', (req, res) => {
    axios.get(url).then((res) => {
        console.log(res);
        setData(res.data);
        setImgSearch(res.data.weather[0].description);
        console.log('fetchdata: ' + imgSearch);
      });
})

app.listen(8000, () => console.log(`server running on ${PORT}`));