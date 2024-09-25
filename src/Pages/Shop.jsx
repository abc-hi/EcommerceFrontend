import React from 'react';
import Hero from '../Components/Hero/Hero.jsx';
import Popular from '../Components/Popular/Popular.jsx';
import Footer from '../Components/Footer/Footer.jsx';
// import LatestCollection from './LatestCollection.jsx';



const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular/>
            {/* <LatestCollection /> */}
        </div>
    );
};

export default Shop;