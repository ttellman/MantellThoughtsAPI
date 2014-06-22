var express = require('express');
var app = express();


app.get('/', function(req, res){
    res.send('Hello World!');
})

app.listen(3000);
console.log("Here we go server started on port 3000 hold on tight");