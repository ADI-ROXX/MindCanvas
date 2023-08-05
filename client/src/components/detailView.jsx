import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../service/api';
import styled from "@emotion/styled";
import { Box, InputBase, InputLabel, MenuItem, Select } from "@mui/material";
import { FormControl } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./spinner.css";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { categories } from "../constants/data";
import Spinner from './spinner';

import { Navigate, useNavigate } from "react-router-dom";
import {Button} from "@mui/material"
import  { DataContext } from '../context/dataProvider';
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
const DetailView = ({}) => {
    

    const {id}=useParams();
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState();

    const {account}=useContext(DataContext);

    useEffect(() => {

        const foo=async()=>{
            setLoading(true);
            const a= await API.detailView({id:id});
            setPost(a.data.data[0]);

            setLoading(false);
        }

        foo();
    },[]);

  return (
    <div className={`${!loading?"px-[80px]":""} bg-white`}>
        {loading&& <div className="absolute h-screen z-10 w-screen bg-white flex items-center ">
            <Spinner />
        </div>}
        <div >
            <StyledImage src={post.image} alt="nothing" />     


        <div className="flex pt-2">
        <div className="w-[85%] pl-10 flex select-none justify-center items-center ">

        
        

        <div className="w-[100%] text-[26px]  text-black font-semibold border-[0px] border-lime-900  pr-4 " 
           >
                {post.title} 
        </div>
        
        </div>


        </div>

        <div className="mx-3 py-4  ">
        <p   disabled minRows={4} name="text"  className="w-[100%] cursor-text min-h-[300px] text-[18px] pl-5 font-2xl pt-3 pb-[20px] rounded-lg bg-slate-100 " >
{post.text}
    </p>

        </div>
        </div>
        </div>
  ) 
}

export default DetailView