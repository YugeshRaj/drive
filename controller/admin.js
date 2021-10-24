const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    firstname:{type:String,default:null},
    lastname:{type:String,default:null},
    email:{type:String,unique:true},
    mobile:{type:String,default:null},
    pass:{type:String},
    id:{type:String,default:null},
    register_type:{type:String,default:null},
})
module.exports=mongoose.model("student",schema);