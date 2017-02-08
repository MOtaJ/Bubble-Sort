const express = require('express');
const router = express.Router();
const quickSort = require('../modules/quickSort.js')
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/quickSort', (req, res) => {
  let newArray = JSON.parse(req.body.array);
  res.send(quickSort(newArray));
});

module.exports = quickSort;