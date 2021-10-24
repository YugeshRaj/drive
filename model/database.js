const mongoose=require('mongoose');

exports.connect=()=>{
    mongoose.connect("mongodb://localhost:27017/database",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("Database is connected successfully");
    })
    .catch((error)=>{
        console.log("Sorry....database connection is failed");
    })
}