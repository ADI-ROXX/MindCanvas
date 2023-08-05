import styled from "@emotion/styled";
import { Box, InputBase, InputLabel, MenuItem, Select } from "@mui/material";
import { FormControl } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useEffect, useState,useContext } from "react";
import { categories } from "../../constants/data";
import { DataContext } from "../../context/dataProvider";
import {API} from "../../service/api.js"
import { Navigate, useNavigate } from "react-router-dom";
import {Button} from "@mui/material"


const StyledImage=styled("img")`
    width:100%;
    height:350px;
    object-fit: contain;
    
`;

export const CreateBlogButton=styled(Button)`
    background: linear-gradient(179.2deg, rgb(21, 21, 212) 0.9%, rgb(53, 220, 243) 72.5%);

    border-radius:1rem;
    
    color: white;
    :hover{
        background:linear-gradient(179.2deg, rgb(21, 21, 212) 0.9%, rgb(53, 220, 243) 98.5%);
    }
`;
const Title=styled(InputBase)`
    font-size: 24px;
    padding-left: 10px;

`;

const ContentField=styled(TextareaAutosize)`
    font-size: 20px;
    border-radius: 20px;

`;

const initial={
    username:'',
    image:'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text:'',
    title:'',
    category: '',
    createdDate: new Date(),
}

const CreateBlog=()=>{
    
    const [post,setPost]=useState(initial);
    const [file,setFile]=useState('');


    const {account}=useContext(DataContext);
    const navigate=useNavigate();

    useEffect(()=>{
        const foo=async()=>{
            
            setPost({...post,["username"]:account});
        }
        foo();
    },[]);
    
    const handleChangeCategory =  (event) => {
        setPost({...post,[event.target.name]: event.target.value});

    };



    const submitHandler=async()=>{

        setPost({...post,["createdDate"]: new Date()});

        if(post.text===''||post.title===''||post.category===''){
            console.log('Please enter a username');
            alert("Some fields are missing, please fill them");
        }
        else{
        const res=await API.submit(post);
        if(res.success){
            navigate('/');
        }
    }
    }

    

   

    const changeHandler=(e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    };

    // const url=post.image?post.image:"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ;



     return(
        <div className="px-[80px] bg-white">
        <Box >
            <StyledImage  src={post.image} alt="nothing" />     


        <div className="flex pt-2">
        <div className="w-[85%] flex justify-center items-center">

        <FormControl sx={{pt:0}} className="flex">

            <label htmlFor="fileInput" title="Insert image" className="cursor-pointer">
                <AddCircleIcon fontSize="large"/>
            </label>
            <input 
                type="file" 
                id="fileInput" 

                style={{display:"none"}} 
                onChange={async(e)=>{
                    var reader = new FileReader();

                    reader.readAsDataURL(e.target.files[0]);
                    reader.onload=()=>{
                        console.log(reader.result);
                        setFile(reader.result);
                        setPost({...post,["image"]:reader.result});
                    };
                    reader.onerror=(error)=>{
                        console.log(error);

                    };

                }}/>

        </FormControl>
        

        <Title 
            placeholder="Enter Title" 
            value={post.title} 
            name="title"
            className="w-[100%] border-[0px] border-lime-900 overflow-x-scroll pr-4" 
            onChange={(e)=>changeHandler(e)}/>
        <FormControl sx={{pt:1}} className='w-[20%] pb-2 '>
            <InputLabel id="categorySelector">Category</InputLabel>
            <Select
                labelId="categorySelector"
                id="select"
                name="category"
                value={post.category}
                label="Category"
                onChange={(e)=>handleChangeCategory(e)}
            >
                {
                categories.map(e=>(

                    <MenuItem key={e.id} value={e.cat}>{e.cat}</MenuItem>
                ))
                }

            </Select>
        </FormControl>
        </div>
        <CreateBlogButton onClick={submitHandler} sx={{mt:0.75}} className="w-[12%] ">Post</CreateBlogButton>

        </div>

        <div className="mx-3 py-4  ">
        <ContentField  
            minRows={8} 
            maxRows={8}
            name="text" 
            className="w-[100%]  pl-5 font-2xl pt-3 pb-5  bg-slate-200 overflow-scroll" 
            placeholder="Enter text" 
            value={post.text}
            onChange={(e)=>changeHandler(e)}/>

        </div>
        </Box>
        </div>

     )
}
export default CreateBlog;


const converToBase64=(file)=>{
    return new Promise((resolve, reject)=>{
        const filereader = new FileReader();
        filereader.readAsDataURL(file);
        filereader.onload = ()=>{
            resolve(filereader.result);
        };
        filereader.onerror = ()=>{
            reject(error);
        }
    })
}
