
import Post from "../model/post.js";

const submitPost=async (req,res)=>{

    try{

        const post= await new Post(req.body);
        post.save();

        return res.status(200).json({msg:"Data saved successfully"});

    } catch(err){
        return res.status(500).json(err);

    }
}

export default submitPost;