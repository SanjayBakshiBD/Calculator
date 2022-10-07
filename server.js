const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get('/bmicalculator', function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var wei = parseFloat(req.body.Weight);
  var hei = parseFloat(req.body.Height);
  var answer = wei/(hei*hei);
  res.send("Your BMI is " + answer);
});

app.listen(3000, function(){
  console.log("Server Started");
});
