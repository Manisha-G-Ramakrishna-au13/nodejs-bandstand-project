const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.get('/formSubmit', function(req,res){
  console.log('HELLO: ',req.query);
  var name = req.query.Name ;
  var Email = req.query.Email;
  var Message = req.query.Message;
  console.log( "name , email , message: ",name,Email,Message)

});
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);