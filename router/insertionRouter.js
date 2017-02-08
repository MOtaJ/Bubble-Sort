const express = require('express');
const router = express.Router();
const insertion = require('../modules/insertion.js');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/insertion', (req, res) => {
  let newArray = JSON.parse(req.body.array);
  res.send(insertion(newArray));
});

module.exports = insertion;