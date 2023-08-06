import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import emailValidator from "email-validator";
import { useNavigate } from 'react-router-dom';

const initialMail={
    name:'',
    email:'',
    text:''
  };

const Contact = () => {
  const [mail, setMail] = useState(initialMail);
  const serviceId="service_udmlsry";
  const templateId="template_411lsxe";
  const publicKey="8lkb_EgjuWjZdKA0C";
  const navigate=useNavigate();
  const submitHandler=async (e)=>{

    e.preventDefault();


    try {
      const resp=emailValidator.validate(mail.email); 

      if(resp){
        const res=await emailjs.send(serviceId,templateId,{
        from_name:mail.name,
        message:mail.text,
        "from_email":mail.email
      },publicKey)
        .then((res)=>{
          setMail(initialMail);
          
          alert("Thank you. I have received your message. I will get back to you as soon as possible");
          navigate('/');
        })
        .catch((error)=>{
          alert("Some error occured. Please try again"); 

        })
      
    
    }
      else{
        alert("Invalid email address. Please provide a valid email address.")
      }
    } catch (error) {
      alert("Some error occured, please try again.");
      console.log(error);
    }
    

    }

  return (
<div className=' bg-white h-[92vh] overflow-hidddsen'>

    <div className="w-[100vw] pb-10 bg-white flex flex-col items-center   h-[92vh]   justify-center">
    <div className="flex flex-col gap-6 p-6 pt-6  w-[40vw] rounded-lg shadow-2xl bg-slate-100 justify-center   ">
      <p className="text-[40px] font-semibold text-center">Contact  me here</p>

            <input 

              placeholder='Please enter your name'
              className="w-[97%] p-2  bg-slate-200 text-[20px]   rounded-[5px]"
              name='name'
              value={mail.name}
              onChange={(e)=>setMail({...mail,[e.target.name]:e.target.value})}
              
              />  


            <input 
              placeholder='Please enter your email address'
              className="w-[97%]  p-2  bg-slate-200 text-[20px]  rounded-[5px]"
              name='email'
              value={mail.email}
              onChange={(e)=>setMail({...mail,[e.target.name]:e.target.value})}
              
              />  


            <textarea 
              placeholder='Tell me what you want to say...'
              className="w-[97%]  p-2  bg-slate-200 text-[20px]  rounded-[5px]"

              rows={7}

              name='text'
              value={mail.text}
              onChange={(e)=>{setMail({...mail,[e.target.name]:e.target.value})}}
              
              />  
              <div className='flex flex-row items-end justify-end  pr-[4%]   pt-2  '>
              <button onClick={(e)=>submitHandler(e)} className="bg-blue-200 hover:bg-blue-300 hover:opacity-100 opacity-95 text-black shadow-slate-500 sm:p-4 sm:w-[20%] w-[40%] py-2 sm:py-3 rounded-full shadow-lg "> Send </button>

              </div>
          </div>
        </div>
        </div>
  )
}

export default Contact