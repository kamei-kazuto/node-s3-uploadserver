const fs = require('fs');
const { resolve } = require('path');
const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.post('/profile', upload.single('avatar'), (req, res, next) => {
  console.log(req)
})

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  const html = fs.readFileSync(resolve( __dirname, 'upload.html'))
  console.log(html)
  res.send(html);
});

app.listen(3000);
