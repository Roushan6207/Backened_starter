
//server   created...
const express= require ('express');
const app=express();

//used to parse req.body in express.-> put or post
const bodyParser= require("body-parser");

// specifivically parse json data & add it to the request.body object
app.use(bodyParser.json());

//activate the server on 3000 port..
app.listen(3000, () => {
   console.log("server started at port no : 3000")
});

// routes defined...

//get request..
app.get('/',(req,res) => {
res.send("hello sir kaise ho");
}) 

//post request..
app.post('/api/van', (request,response) =>{
   const {name,brand}= request.body;
   console.log(name); 
   console.log(brand);
   response.send("car mil gye");
})

const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/myData',{
    
   //  useNewUrlParser: true,
   //  useUnifiedTopology: true
})
.then(() => {
    console.log("database connected");
})
.catch((error) => {
    console.log("received an error");
});

