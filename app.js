const express=require("express");
const mongoose=require("mongoose");
const ejs=require("ejs");
const router=express.Router()
router.get("/",function(req,res){
  res.send("heyyyy")
})
module.exports=router;
