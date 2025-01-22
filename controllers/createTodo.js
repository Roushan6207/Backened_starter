//import the   models...

const Todo=require("../models/Todo");

//define route handler...

exports.createTodo= async(req,res) => {
    try{
   
        //extract title and description from request body

        const {title,description}=req.body;

        //cretae a new todo obj and insert in db

        const response=await Todo.create({title,description});

    }

    catch(err){

    }
}
