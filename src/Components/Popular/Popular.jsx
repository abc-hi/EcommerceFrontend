










    import React, { useEffect,useState } from 'react';
    import './Popular.css';
    import data_product from '../Assets/data.js';
    import Item from '../Item/Item.jsx';

    const Popular = () => {
        const [popularProducts,setPopularProducts] = useState([]);
        useEffect(()=>{
            // fetch('https://localhost:4000/popularinkids')
            // fetch('https://itemcatalogpjtbe.onrender.com/popularinkids')
            fetch('https://ecommercebackend-2tni.onrender.com/popularinkids')
            .then((response)=>response.json())
            .then((data)=>setPopularProducts(data));
                                    },[])
        return (
            <div className='popular'>
                <h1>KIDS POPULAR ITEMS
                </h1>
                <hr />
                <div className='popular-item'>
                    {data_product.map((item,i)=>{
                                            {/* {popularProducts.map((item,i)=>{ */}


                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={"$"+item.new_price} old_price={"$"+item.old_price}/>
                    })}
                </div>

                
            </div>
        );
    };

    export default Popular;