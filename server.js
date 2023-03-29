var express = require('express')
var app = express()

//respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) { // GET Method facilitates you to send only limited amount of data
    res.send('first web server')
})

//list to a particular port

app.listen(3000)