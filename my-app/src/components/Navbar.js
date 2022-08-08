import {useEffect} from 'react';
import "../style/Navbar.css";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';



const Navbar = () => {

    const total = useSelector((state)=>state.cart.cartTotalQuantity)

    useEffect(() => {
        console.log(total);
      }, [total])


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
            <Link style={{textDecoration:"none", color:"white",fontSize:"1.3rem"}} to="/"><h1>.MK Store</h1></Link>   
        </div>
        <div className="right">
            <ul>
                <li><Link style={{textDecoration:"none", color:"white"}} to="/login">LOGIN</Link></li>
                <li><Link style={{textDecoration:"none" , color:"white"}} to="/register">REGISTER</Link></li>
                <li style={{position:"relative"}}><Link style={{textDecoration:"none" , color:"white"}} to="/checkout"> <ion-icon id="cart-symbol" style={{fontSize:"1.5rem"}} name="cart-outline"></ion-icon></Link><span className='totalCount'>{total}</span></li>   
            </ul>
        </div>
    </div>
  )
}

export default Navbar