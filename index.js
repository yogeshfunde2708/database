var express = require("express");
var mysql2 = require("mysql2");
var app = express();
var connection = require('./database');

app.get('/', function(req,res){
    res.send('hello!');
})

app.listen(3000, function(){
    console.log('app liastning on port 3000');
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database connect');
    })
});