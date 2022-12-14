import React from 'react';
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Routes, Route} from "react-router-dom";
import UpHeader from '../components/UpHeader';
import Navbar from '../components/Navbar';
import Checkout from '../pages/Checkout';
import { ToastContainer } from "react-toastify";
import "../style/Main.css"


const Main = () => {
  return (
    <div className='main-part'>
      <ToastContainer/>
      <UpHeader/>
      <Navbar/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
    </div>
  )
}

export default Main