const express = require('express');
const cors = require('cors');
const connect = require("./configs/db");
const router = express.Router();
const app = express();
app.use(express.json());
app.use(cors());
const {register,login} = require('./Controllers/user.controller');
app.use("/signup", register);
app.use("/login", login);
  
app.listen(process.env.PORT || 5500,async function (){
    try{
       await connect()
    console.log("listening on port 5500")  
    }
   catch(err){
    console.log("some error")
   } 
 })