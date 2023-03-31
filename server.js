var express = require('express')
var app = express()


app.get('/', function(req, res) { 
    res.send(`<h1>first web server</h1>`)
})

app.get('/home', function(req, res) { 
    res.send(`<h1>this is homepage</h1>`)
})

app.get('/about', function(req, res) { 
    res.send(`<h1>this is about page</h1>`)
})

app.listen(3000, () => {
    console.log("Server is live at port 3000");
})