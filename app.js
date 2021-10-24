require("dotenv").config();
require("./model/database").connect();
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');
const express=require('express');
const app=express();
const student=require('./controller/admin');

app.use(express.json());
app.post('/login',async(req,res)=>{
    try{

    }
    catch(error){
        console.log(error);
    }
});
app.post('/register', async (req,res)=>{
    try{
        const{firstname,lastname,email,mobile,pass,cpass,id,register_type}=req.body;
        if(!(firstname&&lastname&&email&&mobile&&pass&&cpass&&id&&register_type)){
            res.send('All fields are required');
        }



var { body , validationResult } = require('express-validator');



    body('email','email must be of length greater than equal to 7').isEmail().isLength({min:7}),
    body('pass','passowrd must be of length greater than equal to 7').isLength({min:7})
,(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.json(error);
    }
    else{
        res.send("No errors");
    }
};





        const exist=student.findOne({email});
        if(exist){
            res.send('Email already exist');
        }
        else{
        const add=student.create({firstname,lastname,email,mobile,pass,id,register_type});
        const token=jwt.sign(
            {email},
            process.env.TOKEN_KEY,
            {
                expiresIn:'2h',
            }
        )
        add.token=token;
        res.json(add);
        }
    }
    catch(error){
        console.log(error);
    }
});

module.exports = app; 