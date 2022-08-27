const mongoose=require("mongoose")
const connect=()=>{
    return mongoose.connect
    ("mongodb+srv://bersurda:1010@cluster0.t1cswuk.mongodb.net/?retryWrites=true&w=majority")
     
 }
 module.exports=connect;