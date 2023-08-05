import { useState } from 'react'
"use client";


import Login from './components/login'
import Nav from './components/nav'
// import Home from './components/home'
import DataProvider from './context/dataProvider'
import { BrowserRouter,Routes,Route,Outlet,Navigate } from 'react-router-dom'
import Contact from './components/contact';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import  Homepage  from './components/home';
import CreateBlog from './components/create/createPost';
import DetailView from './components/detailView';
import Error from './components/error';
import About from './components/about';

const theme = createTheme({
  spacing:4 ,
});;

const PrivateRoute=({isAuthenticated})=>{
  return isAuthenticated?
    <><Outlet/></>
  : <Navigate replace={true} to='/login'/>
}


function App() {
  const [isAuthenticated,setAuthenticated] = useState(false);
  return(
    <BrowserRouter>
    <DataProvider isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}>

    <ThemeProvider theme={theme}>


      {isAuthenticated && <Nav/>}
      <div style={{paddingTop:`${isAuthenticated?`64`:`0`}px`} } className="h-screen" >
      

      
        <Routes>
          <Route path="/login" element={<Login setAuthenticated={setAuthenticated}/>}/>
          
          <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
            <Route path="/" element={<Homepage/>}/>
          </Route>
          

            



          <Route path="/details/:id" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
            <Route path="/details/:id" element={<DetailView />}/>
          </Route>


          <Route path="/create" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
            <Route path="/create" element={<CreateBlog/>}/>
          </Route>

          <Route path="/contact" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
          <Route path="/about" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
            <Route path="/about" element={<About/>}/>
          </Route>
          
          <Route path="/*" element={<Error/>} />

        </Routes>  
      </div>

    </ThemeProvider>
      
    </DataProvider>
  </BrowserRouter> 
  )
}

export default App
