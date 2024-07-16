var express = require('express');
var path = require('path');
var app = express();

//define a route
app.get('/intro', function(request, response){
    response.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3100, function(){
    console.log('My express server is running!!!!');
});

