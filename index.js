const express = require('express');
const path = require('path');
const app = express();
const { name } = require('ejs');
const { title } = require('process');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const port = 3000;

app.get('/', (req, res) => {
  var date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const day = date.toLocaleDateString('en-Us', options);
  res.render('home', { day });
});
app.get('/work', (req, res) => {
  var date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const day = date.toLocaleDateString('en-Us', options);
  res.render('work', { day });
});

app.listen(port, () => {
  console.log(`LISTENING ON ${port}`);
});
