const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/jwt');
const schema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{strict:false})


const model= mongoose.model("jwtauth",schema);
module.exports=model;