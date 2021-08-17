var createError = require('html-errors');

var express = require('express');
app = express();

app.get('/', function (req, res) {
  console.log('PTirumala app listening on port 8080!');
  console.log('PT HOSTNAME: ' + process.env.HOSTNAME + '\n');
  res.send('Hello World from pod: ' + process.env.HOSTNAME + '\n')
});

app.listen(8080, function () {
  console.log('PT Example app listening on port 8080!');
});

