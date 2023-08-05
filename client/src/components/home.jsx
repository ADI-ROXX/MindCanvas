"use client";

import styled from "@emotion/styled";
import { Box, Typography,Table, TableRow ,TableHead, TableCell, TableBody, Button} from "@mui/material";

import {categories} from "../constants/data"
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { API } from "../service/api";
import { useEffect, useState } from "react";
import Spinner from "./spinner";
import { TextareaAutosize } from "@mui/material";
const ImageBox= styled(Box)`
    background: url("https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80") center/100% repeat-x #000;

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const CreateBlogButton=styled(Button)`
    background: linear-gradient(179.2deg, rgb(21, 21, 212) 0.9%, rgb(53, 220, 243) 72.5%);
    width: 100%;
    border-radius:1rem;
    
    color: white;
    :hover{
        background:linear-gradient(179.2deg, rgb(21, 21, 212) 0.9%, rgb(53, 220, 243) 98.5%);
    }
`;


// export const [allPosts,setPosts]=useState(await API.allPosts({cat:''})
//                                             .then((res)=>{
//                                                 return res.data;
//                                             }));



const Homepage=()=>{

    const [cat, setCat] = useState('');

    const [allPosts, setAllPosts] = useState([]);
    const [loading, setLoading] = useState();

    const getEllipsis=(text,limit)=>{
        return text.length > limit ? text.slice(0,limit)+"...":text;
      }

    useEffect(()=>{

        setLoading(true);

        const foo=async()=>{
        const res=await API.seePosts({cat:cat});
        setAllPosts(res.data.data);
        setLoading(false);
    }
    foo();
},[]);

useEffect(()=>{
    const foo=async()=>{
        
        setLoading(true);
        const res=await API.seePosts({cat:cat});
        setAllPosts(res.data.data);

        setLoading(false);

        }
        foo();
    },[cat]);

    


    

    return(
        <div className="h-[100%] bg-white ">
            <div className="h-[41%] overfhlow-hidden overflow-y-visible">
                <ImageBox className="w-screen shadow-lg" >
                    <p className="font-medium text-6xl text-[#FFD700] ">MindCanvas</p>
                </ImageBox>


            </div>
        <div className="flex bg-white">

        <div className="w-[20vw] flex   items-center flex-col mx-2">
        <div className="py-[30px] ">
            <div className=" rounded-lg overflow-hidden  ">
                <Link to='/create' style={{textDecoration:'none'}}>
                    <CreateBlogButton variant="contained" className="rounded-sm h-[44px] w-[180px]">Create Blog</CreateBlogButton>
                </Link>
            </div>
        </div>

        <div className="w-[100%] border-l-[2px] h-[300px] overflow-scroll ">

            <Table className="cursor-pointer select-none w-[265px]  ">
                <TableBody  >
                    <TableRow className="!border-[1px] !border-lime-900" style={{backgroundColor:cat!==''?"#ffffff":"#000000"}} onClick={()=>{setCat("");}}>
                        <TableCell sx={{py:5}}  className="cursor-pointer" >
                            <p className={` flex items-center justify-center  text-xl ` } style={{color:cat===''?"#ffffff":"#000000"}}>
                                All categories 
                            </p>
                        </TableCell>
                    </TableRow>
                </TableBody>
            {
                categories.map((e,index) =>(
                    <TableBody key={index}  className="border-b-[1.5px] border-x-[1px]  border-black">
                    <TableRow style={{backgroundColor:cat!==e.cat?"#ffffff":"#000000"}}  onClick={()=>{setCat(e.cat);} }>
                    <TableCell sx={{py:5}}  >

                        <p className="text-xl flex items-center justify-center " style={{color:cat===e.cat?"#ffffff":"#000000"}}>{e.cat}</p>

                    </TableCell>
                     </TableRow>
                     </TableBody>
            ))
        }
        </Table>
            </div>
            
            </div>

            {/* <SeePosts allPosts={allPosts} /> */}
    
    <div className="w-[80vw] flex justify-center items-center relative p-4">
    {loading && <div className=" absolute z-10 top-0 left-0 bg-white  flex items-center  h-[50vh] w-[78vw] ">
            <Spinner/>
        </div>
    }
    <div className="mx-auto flex flex-wrap  gap-4 ">
    {!loading?allPosts.length>0 ?allPosts.map((e,index)=>{
        return(
            <Link key={index} to={`/details/${e._id}`} className="no-underline">

            <div  className="h-[460px] overflow-hidden w-[320px] border-[2px] border-black rounded-lg cursor-pointer"
                    >
              <img src={e.image} className="w-full h-[230px] object-fill" />
              <p className='text-center break-words pb-1 pt-3 text-[16px] text-slate-500'> {e.category}</p>
              <p className='text-center break-words pb-1 text-[20px] font-bold'> {e.title}</p>
              <p className='text-center break-words  text-slate-500'> ~{e.username}</p>
              <p className='px-3 break-words  '> {getEllipsis(e.text,160)}</p>


            </div>
            </Link>

        )
    }) : <div className="text-[24px] text-slate-400 ">Sorry,No posts are present under this category</div>:<div/> } 
    </div>
    </div> 
            

            </div>
        </div>
    )
}
export default Homepage;