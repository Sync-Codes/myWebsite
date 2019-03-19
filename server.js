// Calling Packages
const express = require('express')
  , app = express()
  , path = require("path")

// Setting Views Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('views'))

//Routes
app.get("/", (req, res) => {
  res.render('index');
});



app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/signup', (req, res) => {
     res.render('signup')
});

app.get('/logout', (req, res) => {
    
});

app.get('/profile', (req, res) => {
    res.render('profile');
});



const server = app.listen(8000, function () {
    console.log('Listening on port %s...', server.address().port);
});


