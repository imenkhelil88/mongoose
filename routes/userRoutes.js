const express=require("express")
const { Adduser, Getuser, Deleteuser, Edituser, Getone } = require("../controllers/userControlles")
const userRoutes=express.Router()



userRoutes.post("/add",Adduser)
userRoutes.get("/",Getuser)
userRoutes.delete("/:id",Deleteuser)
userRoutes.put("/edit/:id",Edituser)
userRoutes.post("/filter",Getone)



module.exports=userRoutes