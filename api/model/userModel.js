import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    profilePicture:{
        type:String,
        default:"https://i.pinimg.com/originals/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},{timestamps:true}
)

const User=mongoose.model('User',userSchema);

export default User;