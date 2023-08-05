import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const authenticate=(req,res,next)=>{
    const accesToken=req.headers['authorization'] ; // Here we are getting the headers that we have made in the axios instance
    const accessToken = accesToken.split(' ')[1];
    

    if(accessToken==null){
        res.status(401).json({msg:"Token is mission"});
        
    }
    const access_key=process.env.ACCESS_SECRET_KEY_JWT;
    
    jwt.verify(accessToken, access_key , (error,user)=>{
        if(error){
            return res.status(403).json({msg:"Atuhentication error"});
            
        }
        req.user = user;
        next(); // Since the current function is a middleware, we need to send the call to the original function and that's why next() is used.
    })
}