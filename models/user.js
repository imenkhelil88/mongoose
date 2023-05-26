const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:String,
    email:{type:String,required:true,unique:true},
    pass:{type:String,required:true},
    phone:Number
})
module.exports=mongoose.model("user",userSchema)