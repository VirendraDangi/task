import type { Request, Response } from "express"
import { todoModel } from "../models/todo.model.js"

export const createTodoController = async (req: Request, res: Response) => {

    const { title, completed, user } = req.body

    if (!title) {
        return res.status(400).json({
            message: "todo not found"
        })
    }


    const todo = await todoModel.create({
        title,
        completed: completed || false,
        user: user || null
    })

    return res.status(201).json({
        message: "Todo created successfully",
        todo: todo,
    });


}

export const updateTodoContorller = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;


        const updatetodo = await todoModel.findByIdAndUpdate(id, {
            $set: req.body,

        },{new:true});


        if (!updatetodo) {
            return res.status(404).json({
                message: "todo not found"
            })
        }


        res.status(200).json({
            message: "Todo updated successfully",
           updatetodo,
        });



    } catch (error) {


        res.status(500).json({
            message: "Server error"
        });

    }


}

export const deleteTodoController = async (req:Request,res:Response) => {
      
     const {id} = req.params ;

     const deleteTodo = await todoModel.findByIdAndDelete(id) ;

     if(!deleteTodo){
        return res.status(404).json({
             message : "todo not found"
        })
     }

     res.status(200).json({
        message : "todo deleted sucessfully" ,
        deleteTodo

     })
     
}

export const getTodoController = async (req: Request, res: Response) => {
  try {

    const { status, sortBy, order, priority, userId } = req.query

    const filter: any = {};

    if (status === "completed") filter.completed = true

    if (status === "pending") filter.completed = false

    if (priority) filter.priority = priority;

    if (userId) filter.user = userId;

   
    const sortOptions: any = {}
    if (sortBy) {
    
      sortOptions[sortBy as string] = order === "desc" ? -1 : 1;
    } else {
      sortOptions.createdAt = -1

    const todos = await todoModel.find(filter).sort(sortOptions);

    res.status(200).json({
      message: "Todos fetched successfully",
      count: todos.length,
      todos,
    });
}
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};