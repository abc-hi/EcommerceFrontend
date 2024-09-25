    import React from 'react';
    import './ProductDisplay.css';
    import star_icon from '../Assets/star_icon.jpeg';
    import star_dual_icon from '../Assets/star_dual_icon.png';
    import { useContext } from 'react'; // Import useContext
    import { Shopcontext } from '../Context/Shopcontext'; // Import Shopcontext



    const ProductDisplay = (props) => {
        const {product} =props;
    const{addToCart} = useContext(Shopcontext);
    const{removeFromCart} = useContext(Shopcontext);


        return (
            <div className='productdisplay'>
                <div className="productdisplay-left">
                    <div className="produtdisplay-img-list">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />

                        <img src={product.image} alt="" />

                        <img src={product.image} alt="" />

                    </div>
                    <div className="productdisplay-img">
                        <img className='productdisplay-main-img'src={product.image} alt="" />
                    </div>
                </div>
                <div className="productdisplay-right">
                <h1>{product.category}</h1>
                    <h1>{product.name}</h1>
                    

                    <div className="productdisplay-right-stars">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />

                        <img src={star_icon} alt="" />

                        <img src={star_icon} alt="" />

                        <img src={star_dual_icon} alt="" />
                        <p>122</p>
                        <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-prices-old">${product.old_price}
                        <div className="productdisplay-right-prices-new">${product.new_price}</div>
                        <div className="productdisplay-right-descripton">
                            A lightweitht,usually knitted , pullover shirt, close-fitting,round neckline and short sleeves , worn as an undershirt or outer garment.
                        </div>
                        {/* <div className="productdisplay-right-size">
                            <h1>Select Size</h1>
                        </div> */}
    </div>



                        </div>

                    </div>
                    <div className="add">
                    <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button></div>
                    <div className="remove">
                    <button onClick={()=>{removeFromCart(product.id)}}>REMOVE FROM CART</button></div>

                    
                    </div>
                
            </div>
        );
    };

    export default ProductDisplay;