import React from 'react';
import "../style/Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="left">
            <span>EN</span>
            <div className="search">
                <p><ion-icon  name="search-outline"></ion-icon></p>
                <input id='searchBar' type="text" placeholder='Search...'/>
            </div>
        </div>
        <div className="mid">
            <Link style={{textDecoration:"none"}} to="/"><h1>.MK STORE</h1></Link>   
        </div>
        <div className="right">
            <ul>
                <li><Link style={{textDecoration:"none"}} to="/login">LOGIN</Link></li>
                <li><Link style={{textDecoration:"none"}} to="/register">REGISTER</Link></li>
                <li><Link style={{textDecoration:"none"}} to="/checkout"> <ion-icon style={{fontSize:"19px"}} name="cart-outline"></ion-icon></Link></li>   
            </ul>
        </div>
    </div>
  )
}

export default Navbar