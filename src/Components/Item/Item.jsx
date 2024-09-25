



// kid comp

import React from 'react';
import '../Item/Item.css';
// import all_product from '../Assets/all_product.js';
import { Link } from 'react-router-dom';




const Item = (props) => {
     // Ensure the image URL uses HTTPS
     const imageUrl = props.image.startsWith('http://') 
     ? props.image.replace('http://', 'https://') 
     : props.image;

 // Log the image URL to ensure it's correct
 console.log(`Image URL: ${imageUrl}`);
 
    return (
        <div className='item'>
            {/* <Link to={`http://localhost:5173/product/${props.id}`}><img src={props.image} alt="" /></Link> */}
            {/* <Link to={`http://localhost:3000/product/${props.id}`}><img src={props.image} alt="" /></Link> */}
            {/* <Link to={`http://localhost:4000/product/${props.id}`}><img src={props.image} alt="" /></Link> */}

            {/* <Link to={`https://itemcatalogpjtbe.onrender.com/product/${props.id}`}><img src={props.image} alt="" /></Link> */}
            <Link to={`/product/${props.id}`}>
                <img src={props.image} alt={props.name}  />
            </Link>

            <p>{props.category}</p>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                    ${props.new_price}
                </div>
                <div className='item-price-old'>
                    ${props.old_price}
                </div>
            </div>
        </div>
    );
};

export default Item;


