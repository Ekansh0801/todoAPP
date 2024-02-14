//import model

const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async(req,res) => {
    try{
        const {title,description} = req.body;
        //create new todo objext and insert in db
        const response = await Todo.create({title,description})
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully",
            }
        );
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json(
            {
            success:false,
            data:"internal server error",
            message:err.message
            }
        );
    }
}