"use client";
import styled from '@emotion/styled';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/dataProvider';
import { useContext } from 'react';

const Navbar=styled(AppBar)`
background: radial-gradient(circle at 14.2% 27.5%, rgb(104, 199, 255) 0%, rgb(181, 126, 255) 90%);

`;

const Nav=()=>{
    const {isAuthenticated}=useContext(DataContext);

    const {setAuthenticated}=useContext(DataContext);

    return(

            <Navbar >
                <Toolbar className='flex justify-center items-center gap-10 '>
                    <Link to='/' className='text-lg  '>Home</Link>
                    <Link to='/about' className='text-lg  '>About</Link>
                    <Link to='/contact' className='text-lg  '>Contact</Link>
                    <Link to='/login' className='text-lg  ' onClick={()=>setAuthenticated(false)}>Logout</Link>
                </Toolbar>
            </Navbar>

    )
}
export default Nav;