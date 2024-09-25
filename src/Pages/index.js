import React from 'react';
import ReactDom from 'react-Dom/client';
import './index.css';
import App from './App';
// import ShopcontextProvider from './Context/Shopcontext';
import ShopcontextProvider from '../Context/Shopcontext';




const root =ReactDom.createRoot(document.getElementById('root'));
root.render(
    <ShopcontextProvider>
        <App />
    </ShopcontextProvider>
)
