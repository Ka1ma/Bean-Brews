var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


const app = express();

// Body-parser middleware for JSON
app.use(bodyParser.json());
app.listen(express.static('public'))
app.use(bodyParser.urlencoded({
  extended:true
}))

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/Bean&Brews', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB", error);
});

app.post("/sign_up",(req,res)=>{
  var name= req.body.name
  var age=req.body.agevar 
  var email=req.body.email
  var phno=req.body.phno
  var gender=req.body.gender
  var password=req.body.password

  var data={
    "name":name,
    "age":age,
    "email":email,
    "phno":phno,
    "gender":gender,
    "password": password
  }
  Db.collection('user').insertOne(data,(err,collectio)=>{
    if(err){
      throw err;
    }
    console.log("Record Inserted Succesfully")
  })
  return res.redirect('signup_success.html')
})

// Simple route
app.get("/", (req, res) => {
  res.set({
       "Allow-access-allow-origin":'*'
  })
  return res.redirect('index.html')
}).listen(3000)

// Start the server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});


