const User = require('../model/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async(req,res,next)=>{
    // validation
    let existingUser;
    try{
        existingUser=await User.findOne({email:req.body.email})
    }catch(err){
        console.log(err)
    }

    if(existingUser)
    {
        return res.send({message:"user registered before"})
    }
    const hashPassword=bcrypt.hashSync(req.body.password)
     const user=new User({
            resume:req.body.resume,
            name:req.body.name,
            mobileno:req.body.mobileno,
            email:req.body.email,
            password:hashPassword,
            address:req.body.address,
            experince:req.body.experince,
            highestQualification:req.body.highestQualification,
            skills:req.body.skills
    
        });
    
        try{
            await user.save();
        }catch(err){
            console.log(err)
        }
        return res.status(201).json(user)
    
    }
    // LOGIN
    const login=async(req,res,next)=>{
        // const {email,password}=req.body;
    
        let existingUser;
        try{
            existingUser=await User.findOne({email:req.body.email})
        }catch(err)
        {
            console.log(err)
        }
       if(!existingUser){
        return res.status(400).send({message:"user not found go and signup"})
       }
    //    but if user is present then how to check password ,because is encypted
    const isPasswordCorrect=bcrypt.compareSync(req.body.password,existingUser.password)
    
    if(!isPasswordCorrect)
    {
        return res.status(400).send({message:"password is incorrect"})
    }
    
    const token=jwt.sign({id:existingUser._id},process.env.JWT_SECRET_KEY,{expiresIn:"3hr"})
    return res.status(200).json({message:"sucesfully Loggediin",user:existingUser,token})
    
    };



module.exports = {register, login};