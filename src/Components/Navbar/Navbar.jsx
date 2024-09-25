import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { Shopcontext } from '../Context/Shopcontext';
import { useContext } from 'react';
import ShopcontextProvider from '../Context/Shopcontext';






const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    const{getTotalCartItems}=useContext(Shopcontext);    
    return (
        <ShopcontextProvider>

        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textdecoration:'none'}}to='/'>shop</Link>{menu==="shop"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textdecoration:'none'}}to='/kids'>kids</Link>{menu==="kids"?<hr />:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/login'><button>login</button></Link>}
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            
        </div>
        </ShopcontextProvider>

    );
};

export default Navbar;

