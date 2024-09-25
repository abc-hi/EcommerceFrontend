import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const {product}=props;
    return (
        <div className='breadcrum'>
           <h3> HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}</h3>

        </div>
    );
};

export default Breadcrum;