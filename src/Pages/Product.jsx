import React from 'react';
import { Shopcontext } from '../Components/Context/Shopcontext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    
    const{all_product}=useContext(Shopcontext);
    const{productId}=useParams();
    const product=all_product.find((e)=>e.id===Number(productId));
    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product} />
        </div>
    );
};

export default Product;