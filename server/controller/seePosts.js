import Post from "../model/post.js"
export const seePosts=async(req,res)=>{


    try{
        if(req.body.cat===''){
        const allPosts=await Post.find();

        res.status(200).json({data:allPosts});
        }
        else{
            const allPosts=await Post.find({category:req.body.cat});
            res.status(200).json({data:allPosts});
        }

    } catch(e){
        res.status(500).json({msg:"some error occured in seePosts.js"});
    }
}