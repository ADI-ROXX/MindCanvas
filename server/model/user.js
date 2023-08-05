import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    email:{
        type: String,
        required : true,

    },
    username:{
        type: String,
        required : true,
        unique : true
    },
    password:{
        type: String,
        required : true,
    }
});

const User = mongoose.model('user',userSchema);  // here we have created a collection "User" which will be used to validate whether the input that we are getting from the request in api calling is correct or not

export default User;






