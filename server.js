const express = require('express');
const axios = require("axios");

express.json();

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', async (req, res) => {
  const { id } = req.query;
  try {
    const { data } = await axios.get(`https://myttc.ca/${id}.json`);
    res.json(data);
    return;
  } catch (e) {
    res.status(404);
    res.json({ error: 'Not found' });
    return;
  }
});

app.listen(3000);
