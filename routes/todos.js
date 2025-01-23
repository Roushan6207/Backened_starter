const express= require("express");
const router=express.Router();

//import controllers...
const {createTodo}=require("../controllers/createTodo");


//define api routes

router.post("/createTodo",createTodo);

module.exports=router;