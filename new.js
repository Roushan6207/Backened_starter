const express = require("express");
const app=express();

//load the config from env file
require("dotenv").config();
const PORT= process.env.PORT || 400;

//middleware to parse json request body
app.use(express.json());

//import routes for todo api
const todoRoutes= require("./routes/todos");

//mount the todo aspi routes
app.use("/api/v1",todoRoutes);

//start server  
app.listen(PORT,  () => {
    console.log(`server started successfully at ${PORT}`);
})

//connect to the database
const dbconnect=require("./config/database");
dbconnect();

//default router
app.get("/",(req,res) =>{
    res.send(`<h1> this is HOMEPAGE </h1>`);
})