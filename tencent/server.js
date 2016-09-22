var express = require('express');
var app= express();
var path = require('path');
app.use(express.static(path.resolve('src')));
app.get('/',function(req,res){
    res.send('./src/index.html','utf8')
});




app.listen(9090);