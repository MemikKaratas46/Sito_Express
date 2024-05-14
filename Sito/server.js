const path = require('path');
var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'pagine.html/home.html'));
});


app.get('/AudiA4', function(req, res){
    res.sendFile(path.join(__dirname, 'pagine.html/A4.html'))
});

app.get('/AudiA3', function(req, res){
    res.sendFile(path.join(__dirname, 'pagine.html/A3.html'))
});

app.get('/AudiA5', function(req, res){
    res.sendFile(path.join(__dirname, 'pagine.html/A5.html'))
});
app.get('/AudiA6', function(req, res){
    res.sendFile(path.join(__dirname, 'pagine.html/A6.html'))
});
app.get('/AudiA7', function(req, res){
    res.sendFile(path.join(__dirname, 'pagine.html/A7.html'))
});
app.get('/Contatti', function(req, res){
    res.sendFile(path.join(__dirname, 'pagine.html/Contatti.html'))
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});