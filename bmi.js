const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(res, res){
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/",function(req, res){
  var weight = Number (req.body.w);
  var height = Number (req.body.h);
  var result = Math.floor((weight/(height*height))*10000);
  res.send("Your BMI is "+ result);
  // console.log(req.body);
  // res.send("The result is ");
})

app.listen(4000, function(){
  console.log("Server started");
});
