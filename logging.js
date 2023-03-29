const express = require('express');
const app = express();

//simple request time logger

app.use((req, res, next) => {
    console.log("[Server Activity]: " + Date(Date.now()));
    next();
});

app.get('/home', (req, res) => {
    res.send('This is home page');
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
