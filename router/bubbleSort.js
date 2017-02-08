const express = require('express');
const router = express.Router();
const bubbleSort = require('../modules/bubbleSort.js');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/bubble', (req, res) => {
  let newArray = JSON.parse(req.body.array);
  res.send(bubbleSort(newArray));
});

module.exports = bubbleSort;