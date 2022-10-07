const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//This line converts form data to object
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res){
  var number1 = Number(req.body.num1);
  var number2 = Number(req.body.num2);
  var answer = number1 + number2;

  res.send("Answer is " + answer);

});

app.listen(3000, function(){
  console.log("server started");
});
