import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ 
      
     username : {
         type : String ,
         unique : true ,
         required: true ,
         minlength: 4 ,
         maxlenght: 20
     } ,

     email:{
        type:String,
        unique: true ,
        required: true ,
        minlenght: 5 ,
        maxlenght: 50 
     }  ,

     password: {
         type: String ,
         minlength: 6 ,
     }
     
})


export const userModel = mongoose.model("userModel",userSchema)