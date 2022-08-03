import React from 'react';
import "../style/Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="left">
            <span>EN</span>
            <div className="search">
                <p><ion-icon  name="search-outline"></ion-icon></p>
                <input id='searchBar' type="text" />
            </div>
        </div>
        <div className="mid">
                <h1>.MK SOFTWARE STORE</h1>
        </div>
        <div className="right">
            <ul>
                <li>LOGIN</li>
                <li>REGISTER</li>
                <li> <ion-icon style={{fontSize:"19px"}} name="cart-outline"></ion-icon></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar