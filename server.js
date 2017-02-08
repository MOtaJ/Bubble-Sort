const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const sort = require('./router/routerSorts.js');

app.use(bodyParser.urlencoded({ extended: true}));

app.use('/', sort);

module.exports = app;