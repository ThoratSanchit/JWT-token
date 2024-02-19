const services = require("../services/service");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const model = require("../models/model");



router.post("/register",async(req,res)=>{
    try {
        const {username,password}=req.body;
        const securedPass=await bcrypt.hash(password,10);
        const storeData=await services.addData(username,securedPass);
        res.send({
            mesage:"Data is stored succesfully.",
            status:200,
            success:true,
            data:storeData
        })

    } catch (error) {
        console.log(error)
        res.send({
           
            status:400,
            success:false,
            
        })
    }
});

router.post("/login2",async(req,res)=>{
    try {
        const {username,password}=req.body;
        const user=await model.findOne({username});
        
        if(!user){
            res.status(400).send({mesage:"invalid username and password"});
        } 
        const checkpass=await bcrypt.compare(password,user.password);
        if(!checkpass){
            res.status(400).send({mesage:"invalid username and password"});
        }

        const token=jwt.sign({userID:user._id, username:user.username},'secret',{expiresIn:"1h"})
        res.send({
            message:"login succesful",
            token:token
        })

    } catch (error) {
        console.log(error)
        
    }
})

module.exports = router;
