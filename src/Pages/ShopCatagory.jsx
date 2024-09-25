    import React from 'react';
    import '../Pages/CSS/Shopcatagory.css';
    import { Shopcontext } from '../Components/Context/Shopcontext';
    import dropdown_icon from '../Components/Assets/dropdown_icon.png';
    import { useContext } from 'react';
    import Item from '../Components/Item/Item.jsx';
    



    const ShopCatagory = (props) => {
        const {all_product}=useContext(Shopcontext);
        return (    
            <div className='Shop-catagory'> 
            {all_product.map((item,i)=>{
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                
            
                    })}
                <img className='ShopCatagory-banner' src={props.kids_banner} alt="" />
                <div className='shopcatagory-indexSort'>
                    {/* <p><span>Showing 1-8 </span> out of 16 products</p> */}
                {/* <div className="shopcatagory-sort">
                    Sort by <img src={dropdown_icon} alt="" /></div> */}
            </div>
            <div className='shopcatagory-loadmore'>Explore more</div>
            </div>
        );
    };

    export default ShopCatagory;
