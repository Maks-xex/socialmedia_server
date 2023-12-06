const express = require('express');

const app = express();

app.get('/', (_,res) => {
  res.send('Hello World!');
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});