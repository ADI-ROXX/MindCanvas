// This file will be used as an api call of the router 
import User from "../model/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
import Token from "../model/token.js";

dotenv.config();
export const signupUser = async (request,response)=>{  //jab bhi api call hoti hai, 2 cheezein aati hai hamare paas, ek request aur response
    // request is the data being sent from the frontend(client) 
    // response is the output that the server is going to send back to the client
    try{

        const user = request.body;
        const hashedPassword=await bcrypt.hash(user.password,10);//Here 10 means that the size of the salt is 10
        const uname=user.username;
        // User.findOne({username:uname},(err,data)=>{
        //     if(err){
        //         console.log(err);
        //     }
        //     else{
        //         console.log(data);
        //     }
        // });
        const val=await User.findOne({username:user.username}).exec();
        if(val!==null){
            return response.status(600).json({msg:"Username already taken"});
        }
        const hashedUser={username:user.username,password:hashedPassword}
        const newUser = new User(hashedUser);
        

        await newUser.save();  // validation will happen in this line i.e. if the either one of the username or email or password is not entered, error will be thrown

        return response.status(200).json({msg:"SignUp successful"});  //here response will be returned as a json object with keys status and data and in data, there will again be a json with key msg and value as "SignUp successfull"
    } catch(err){
        return response.status(590).json({msg:"SignUp failed"});
    }

}


export const loginUser=async(req,res)=>{
    let matchedUser=await User.findOne({username:req.body.username});
    if(matchedUser){
        const hashedPassword=matchedUser.password;
        const inputPassword=req.body.password;
        try{
            if(bcrypt.compare(inputPassword,hashedPassword)){

                const accessToken=jwt.sign(matchedUser.toJSON(),process.env.ACCESS_SECRET_KEY_JWT,{expiresIn:'15m'});
                const refreshToken=jwt.sign(matchedUser.toJSON(),process.env.REFRESH_SECRET_KEY_JWT);
                const newToken=new Token({token:refreshToken});

                await newToken.save();

                res.status(200).json({accessToken:accessToken,refreshToken:refreshToken});
            }

            else{
                console.log("Mid");
                res.status(403).json({msg: "Password not matching"})
            }
        } catch(err){
            console.log("DOwn")
            return res.status(500).json({msg:"Some uncaught exception occured, please check}"});
        }
    } else{
        res.status(204).json({msg:'User not found'});;
    }
}