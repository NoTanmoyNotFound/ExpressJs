const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const TanmoyMiddleware = (req, res, next) => {
  console.log(req);
  next();
};


app.get('/hello/:name', (req, res) => {
  res.send('Hello World! ' + req.params.name);
});

app.get('/page', (req, res) => {
  // Uncomment and use one of the following as per your requirement
  // res.send('Hello World!');
  // res.sendFile(path.join(__dirname, 'index.html'));
  // res.json({"Tanmoy": 21});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

