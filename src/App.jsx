  import React from 'react';
  import Navbar from './Components/Navbar/Navbar';
  import { BrowserRouter,Routes,Route } from 'react-router-dom';
  import ShopCatagory from './Pages/ShopCatagory.jsx';
  import Product from './Pages/Product.jsx';
  import LoginSignup from './Pages/LoginSignup.jsx';
  import Shop from './Pages/Shop.jsx';
  import Cart from './Pages/Cart.jsx';
  import { Link } from 'react-router-dom'; // Import Link from react-router-dom
  // import { Link } from 'react-router-dom';
  import Footer from './Components/Footer/Footer.jsx';
  import kids_banner from './Components/Assets/banner_kid.jpeg';
  // import ShopcontextProvider from './Components/Context/Shopcontext';
  import ShopcontextProvider from './Components/Context/Shopcontext';
  import base from '../apiconfig.js'; // Import API base URL

  const App = () => {
    return (
      <div>
        <BrowserRouter>
      
        <ShopcontextProvider>
        <Navbar />
        <Routes>
        <Route path='/' element={<Shop/>}/>

          <Route path='/kids' element={<ShopCatagory banner={kids_banner} category="kids" />}/>
          <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>

  </Route>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<LoginSignup/>}/>

  </Routes>


    <Footer /> 
    
    </ShopcontextProvider>
    
  </BrowserRouter>
      </div>
    );
  };

  export default App;