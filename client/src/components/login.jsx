"use client";



import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import {createTheme} from '@mui/material';
import {Link } from '@mui/material' ;
import { useState ,useContext} from 'react';
import {API} from "../service/api"
import { DataContext } from '../context/dataProvider';

import {  useNavigate } from 'react-router-dom';
const signupInitialValues={
  email:'',
  username:'',
  password:'',
}

const loginInitialValues={
  username: '',
  password: '',
}

const theme=createTheme({
  spacing: 23,
});
export default function Login({setAuthenticated}) {
  const iconUrl="/blog.png"
  const [newAcc,toggleNewAcc] = useState(false);
  const [signup,setSignup] = useState(signupInitialValues);
  const [login,setLogin] = useState(loginInitialValues);;


  const {setAccount}=useContext(DataContext); // whenever we will run setAccount in this program, the value of account will be changed
  
  console.log()
  const signupClick=async ()=>{


    const response = await API.userSignup(signup);

    if(response.code===600){
      alert("Username already taken, please try some other username");
    }
    if(response.success)
    {setLogin({username:signup.username,password:signup.password});

    
    toggleNewAcc(false);
  }
    
  }
  

  const loginChange = async (e)=>{
    setLogin({...login, [e.target.name]:e.target.value});
  }
  const navigate=useNavigate();

  const loginClick=async (e)=>{
    setAccount(login.username);
    const res = await API.userLogin(login);
    try{

      sessionStorage.setItem("accessToken",`Bearer ${res.data.accessToken}`);     // Session storage is the storage where the data will be stored till the browser is closed
      sessionStorage.setItem("refreshToken",`Bearer ${res.data.refreshToken}`);    // To access session Storage in inspect, go to Application/Storage and You'll find it there 

      setAuthenticated(true); 
      navigate("/");
  }catch(err){
    console.log(err);
  }
  };

  
    const changeText=(e)=>{
      setSignup({...signup, [e.target.name] : e.target.value }); // ...signup preserves the original values and [] sets e.target.name as key and e.target.value as value
      // console.log(signup);
      
    }
    
    return (
      
    <div className="h-screen bg-slate-100 ">
     <div className = "flex items-center justify-center h-screen ">
      {newAcc ? 
      <div className="bg-slate-200  w-[31%] h-[75%] rounded-lg p-8 shadow-xl flex flex-col items-center justify-center">
            <img src={iconUrl} alt="Nothing" className="h-[50%] "/>

            <TextField onChange={(e)=>changeText(e)}   name="username" label="Create Username"  variant="standard" value={signup.username} className=" mx-4 w-[60%] "/>
            <TextField onChange={(e)=>changeText(e)}  name="password" label="Create Password" variant="standard" value={signup.password} type='password' className="w-[60%] mt-2" />
            <Button variant="contained" onClick={signupClick} className="mt-5 mb-4 w-[40%]  bg-blue-600 ">Sign Up</Button>
            <p> or</p>
            <Link onClick={()=>toggleNewAcc(false)}>Already have an Account? Sign in </Link>
      </div> 
      :
        <div className="bg-slate-200  w-[31%] h-[60%] rounded-lg p-8 shadow-xl flex flex-col items-center justify-center">
          <img src={iconUrl} alt="Nothing" className="h-[50%] "/>
          <TextField  onChange={(e)=>loginChange(e)}  name="username" value={login.username} label="Username" variant="standard" className="mt-2 w-[50%] "/>
          <TextField  onChange={(e)=>loginChange(e)}  name="password" value={login.password} label="Password" variant="standard" type='password' className="w-[50%] mt-2" />
          <Button variant="contained" sx={{mt:5,mb:2}} onClick={loginClick} className="mt-5 mb-2 w-[40%] bg-blue-600">Login</Button>
          <p> or</p>
          <Link onClick={()=>toggleNewAcc(true)}> Create an account</Link>
        </div>   
      }
     </div>
    </div>
  )
}
