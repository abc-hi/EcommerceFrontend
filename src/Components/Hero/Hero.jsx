import React from 'react';
import './Hero.css';

import hand_icon from '../Assets/hand_icon.jpeg';
import hero1 from '../Assets/hero1.jpg';
// import arrow_icon from '../Assets/arrow_icon.png';
import hero from '../Assets/hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero '> 
        <div className="hero-left" >
{/* <h2>NEW ARRIVALS ONLY</h2> */}
<div>
    <div className='hero-hand-icon'>
        <p>NEW</p>
        <img src={hand_icon} alt="" />
    </div>
    <p>
        collections
    </p>
<p>for your girl kids</p><br /><br />
<p>Shop for your little princes</p>
</div>
<div className='hero-latest-btn'>
    {/* <div><Link to ='/LatestCollection'>LatestCollection</Link></div>  */}
     {/* <div>Latest Collection</div> */}
    <img src="{arrow_icon}" alt="" />
</div>
           </div> 
           <div className="hero-right">
            <img src={hero} alt="" />
            <div className="hero1-right">
            <img src={hero1} alt="" /></div>

</div> 
        </div>
    );
};

export default Hero;