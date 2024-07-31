import React from 'react';
// import img1 from '../Asset/eclp.png';
import veg from '../Asset/veg.png';
import './About.css';

 function About() {
  return (
    <>
    <div className='about' id='About'>
        <div className='abt-left'>
            {/* <img src={img1} alt="first-img" /> */}
            <img src={veg} alt="second-img" className='veg' />
           
        </div>
        <div className='abt-right'>
            <h6>Veg Bowl !</h6>
            <p>This wholesome salad ensures a satisfying and nutritious meal, offering a rich supply of vitamins, minerals, and healthy fats, while keeping you energized and satiated</p>
            <button className='btn  '>Deit Plan</button>
        </div>
    </div>
    </>
  )
}

export default About;

