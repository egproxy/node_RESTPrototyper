"use strict";
var express = require('express');
var app = express();

app.use(express.static('www'));

// Sample GET
app.get('/', function(req, res){
  // Sample QUERY STR
  var sample_qval = req.query.sample || null;

  res.status(200).send("OK");
});

// Sample POST
app.post('/', function(req, res){
  res.status(200).json("Got POST request");
});

// Sample PUT
app.put('/:id', function(req, res){
  var id = req.param.id;
  
  if( true ) {
    //If created
    res.status(201).send("PUT: Content created");
  } else {
    //If modified
    res.status(200).send("PUT: Content successfully modified");
  }
});

// Sample DELETE
app.delete('/:foo', function(req, res) {
  var foo = req.param.foo;
  if(foo) {
    res.status(200).send("Fed to gremlins");
  } else if(!foo) {
    // 204 (No content) means done but server doesn't send data
    res.status(204).end();
  } else {
    res.status(202).send("Gremlins on vacation");
  }
});

// Sample 404
app.get('/404', function(req, res) {
  res.status(404).send("Not Found");
});

// For more information on REST verbs consult:
// http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.6


var server = app.listen(3000, 'localhost', function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server is listening at http://%s:%s", host, port);
});
