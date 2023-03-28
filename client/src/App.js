import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from "./components/header/navbar";
import Newnav from "./components/header/newnav";
import Maincomp from "./components/home/Maincomponent";
import Footer from "./components/footer/footer";
import SignIn from "./components/signup_sign/sign_in";
import SignUp from "./components/signup_sign/sign_up";
import Cart from "./components/cart/Cart";
import Buynow from "./components/buynow/buynow";
import {Routes,Route} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


const App=()=>{

  const [data,setData]=useState(false);

  useEffect(()=>{
    setTimeout(()=>{

      setData(true);

    },2000)
  },[]);
  return(
    <>

    {
      data? (
        <>

        <Navbar/>
      <Newnav/>
      <Routes>
        <Route path="/" element={<Maincomp/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/getproductsone/:id" element={<Cart/>}/>
        <Route path="/buynow" element={<Buynow/>}/>
      </Routes>
      
      <Footer/>


        </>

      ):(
        <div className="circle">
          <CircularProgress/>
          <h2>Loading..</h2>
        </div>
      )
    }
      
    </>
  );
}

export default App