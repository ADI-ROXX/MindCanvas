import Post from "../model/post.js";

export const DetailView = async(req,res)=>{
    const id=req.body.id;


    
    try{
        const indivBlog=await Post.find({_id:id});
        res.status(200).json({data:indivBlog});
    } catch(err){
        res.status(403).json({msg:"some error occured, please try again"});
    }




}