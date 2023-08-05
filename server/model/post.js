import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    title:{
        type:String,

    },
    image:{
        type:String,
    },
    category:{
        type:String,
        required:true,
    },
    createdDate:{
        type:Date,
        required:true, 
    },
    



});
const post= mongoose.model('post', postSchema);

export default post;