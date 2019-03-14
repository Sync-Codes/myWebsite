// Calling Packages
const express = require('express')
  , app = express()
  , path = require("path")
  , session  = require('express-session')
  , passport = require('passport');

// Setting Views Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))

//Routes
app.get("/", (req, res) => {
  res.render('index');
});

app.get("/projects", (req, res) => {
  res.render('projects');
});

app.get('/about', (req, res) => {
    res.render('about')
});


const server = app.listen(3000, function () {
    console.log('Listening on port %s...', server.address().port);
});


