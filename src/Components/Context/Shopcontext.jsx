import React, { createContext } from "react";
// import { useContext } from "react";
import { useState,useEffect } from "react"




export const Shopcontext= createContext(null)
const getDefaultCart = ()=>{
    let cart ={};
    for(let index=0; index <300+1; index++){
cart[index]  =0 
 }
 return cart;
}

const ShopcontextProvider =(props)=>{
    const [all_product,setAll_Product] = useState([])
    const[cartItems,setCartItems]=useState(getDefaultCart());
    
useEffect(()=>{
// fetch('https://localhost:4000/allproducts')
fetch('https://itemcatalogpjtbe.onrender.com/allproducts')

.then((response)=>response.json())
.then((data)=>setAll_Product(data))
if(localStorage.getItem('auth-token')){
    fetch('https://localhost:4000/getcart',{
        // fetch('https://itemcatalogpjtbe.onrender.com/getcart',{

        method:'post',
        headers:{
            Accept:'application/form-data',
            'auth-token':`${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json',

        },
        body:"",

    }).then((response)=>response.json())
    .then((data)=>setCartItems(data));
}
},[])

    const addToCart =(itemId)=>{
       setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1})) 
       if(localStorage.getItem('auth-token')){
        fetch('https://localhost:4000/addtocart',{
            // fetch('https://itemcatalogpjtbe.onrender.com/addtocart',{

            method:'post',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type' :'application/json',

            },
            body:JSON.stringify({"itemId":itemId}),
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
       }
    }
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
         if(localStorage.getItem('auth-token')){
            fetch('https://localhost:4000/removefromcart',{
                // fetch('https://itemcatalogpjtbe.onrender.com/removefromcart',{

                method:'post',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type' :'application/json',
    
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));  
         }
     }
const getTotalCartAmount =() =>{
    let totalAmount =0;
    for(const item in cartItems){
        if(cartItems[item]>0)
        {
            let itemInfo = all_product.find((product)=>product.id===Number(item))
            totalAmount +=itemInfo.new_price * cartItems[item];
        }
    }
        return totalAmount;
    }
    const getTotalCartItems =() =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+=cartItems[item]
            }
        }
        return totalItem;
    }

     const contextValue  ={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};


    return(
        <Shopcontext.Provider value ={contextValue}> 
        {props.children}
        </Shopcontext.Provider>   )
}
export default ShopcontextProvider;