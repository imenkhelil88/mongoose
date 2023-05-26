const userSchema=require("../models/user")

exports.Adduser=async(req,res)=>{
    try {
        const user=new userSchema(req.body)
       await user.save()
        res.status(200).send({msg:"user added",user})
    } catch (error) {
       res.status(500).send(error) 
    }
}
exports.Getuser=async(req,res)=>{
    try {
        const user= await userSchema.find()
        res.status(200).send({msg:"list of users",user})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.Deleteuser=async(req,res)=>{
    try {
        await userSchema.findByIdAndDelete(req.params.id)
        res.status(200).send("user deleted")
    } catch (error) {
        res.status(500).send(error) 
    }
}
exports.Edituser=async(req,res)=>{
    try {
        const user=await userSchema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).send({msg:"user updated", user})
    } catch (error) {
        res.status(500).send(error) 
    }
}
exports.Getone=async(req,res)=>{
    const {name}=req.body
    try {
        const user=await userSchema.find({name})
        res.status(200).send({msg:"user found", user})
    } catch (error) {
        res.status(500).send(error)   
    }
}