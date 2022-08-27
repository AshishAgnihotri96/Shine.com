const mongoose= require("mongoose")
const userSchema=mongoose.Schema({
    resume:{type:String,required:true},
    name:{type:String,required:true},
    mobileno:{type:Number,required:true},
    email:{type:String,required:true,uniqe:true},
    password:{type:String,required:true},
    address:{type:String,required:true},
    experince:{type:Number,required:true},
    highestQualification:{type:String,required:true},
    skills:{type:String,required:true}
    


})

module.exports= mongoose.model("User",userSchema)