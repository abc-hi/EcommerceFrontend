import React from 'react';
import '../Item/Item.css';
import all_product from '../Assets/all_product.js';
import { Link } from 'react-router-dom';


const LatestCollection = () => {
    return (
        <div className='latestcollection'>
            <Link to={`http://localhost:5173/LatestCollection/product/${props.id}`}><img src={props.image} alt="" /></Link>
            {/* <Link to={`https://itemcatalogpjtbe.onrender.com/LatestCollection/product/${props.id}`}><img src={props.image} alt="" /></Link> */}

            <p>{props.category}</p>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                    {props.new_price}
                </div>
                <div className='item-price-old'>
                    {props.old_price}
                </div>
                </div>
            
        </div>
    );
};

export default LatestCollection;


// import React from 'react';
//     // import './Popular.css';
//     import all_product from '../Assets/all_product.js';
//     // import Item from '../Components/Item/Item.jsx';
//     import Item from '../Item/Item.jsx';

//     const Popular = () => {
//         return (
//             <div className='popular'>
//                 <h1>latest
//                 </h1>
//                 <hr />
//                 <div className='popular-item'>
//                     {all_product.map((item,i)=>{
//                         return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={"$"+item.new_price} old_price={"$"+item.old_price}/>
//                     })}
//                 </div>

                
//             </div>
//         );
//     };

//     export default Popular;