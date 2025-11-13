import type { Request, Response } from "express";
import { userModel } from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const RegisterController = async(req:Request,res:Response)=>{
  try {
    
        
     const {username,email,password} = req.body ;
   
      const isUserExist = await userModel.findOne({
        $or:[
            {
                username:username
            } ,
            {
                email: email
            }
        ]
      })


      if(isUserExist){
         return res.status(400).json({
             message: "user already exist please login"
         })
      }

   const hassPass = await bcrypt.hash(password,10) ;

    const user = await userModel.create({
         username: username,
         password: hassPass ,
         email: email
    })
 
    const token = jwt.sign({
        id: user._id ,
        username: user.username
    },process.env.JWT_SECRET!)

    res.cookie("token", token, {
  httpOnly: true,       
  secure: false,        
  sameSite: "lax",      
  path: "/",             
});


    return res.status(201).json({
        message : "user created sucessfully" ,
        user: user
    })

  } catch (error) {
     res.status(500).json({
      message : "internal server error" ,
       error
     })
  }

}

export const LoginController = async(req:Request,res:Response)=>{
     
  try {

      const {email,password} = req.body
  
     const user = await userModel.findOne({
         email: email
     })

     if(!user){
         return res.status(400).json({
            message : "invalid email and password"
         })
     }
     
   
  const isPassMatch = await bcrypt.compare(password,user.password!)

   if(!isPassMatch){
    return res.status(400).json({
        message: "invalid email and password"
    })
   }

 
   const token = jwt.sign({
    id : user._id ,
    username: user.username
   },process.env.JWT_SECRET!)


    res.cookie("token", token, {
  httpOnly: true,       
  secure: false,        
  sameSite: "lax",      
  path: "/",             
});

     return res.status(200).json({
      message: "Login successful",
      user,
      token,
    });
      
    
  } catch (error) {
    res.status(500).json({
      message : "internal server error" ,
       error
     })
  }
}

export const logoutController = async (req: Request, res: Response) => {
    
  try {

    const token = req.cookies.token;

    if (!token) {
   return res.status(400).json({
      message: "you are already logout"
    })
    }

      res.clearCookie("token")
   
    return res.status(200).json({
      message: "Logout successful"
    })

  } catch (err) {
    return res.status(500).json({
      message: "Internal server error"
    })

  }
}
