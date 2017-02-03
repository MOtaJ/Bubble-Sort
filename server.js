const express = require('express');
const app = express();
const bubble = require('./router/router.js');
const bodyParser = require('body-parser');

app.use('/bubble', bubble);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(4000, function() {
  console.log('Listening on port 4000');
})