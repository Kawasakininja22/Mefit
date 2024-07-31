import React from 'react'
 import img from '../Asset/grapes.png';
 import back from '../Asset/back.png';
 import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
 
import './Home.css';

 function Home() {
  return (
    <>
    <div className='home'>
        <div className = 'home-left col col-lg-6 '>
            <p id='content'>Great way to start you're Day</p> 
          
            <p className='para'>  This healthy dish can include a variety of fruits each contributing its unique flavor and nutritional benefits. Perfect for breakfast, a snack, or a light dessert, a fruit bowl is not only visually appealing but also packed with essential vitamins, antioxidants, and fiber, making it a refreshing and wholesome choice for any time of day </p>
             
            
            <button >Check Out 
             <p className='icon'><ArrowForwardOutlinedIcon/></p>
            </button>
            
        </div>
        <div className = 'home-right col col-lg-6 col-8'>
         <img src={back} alt="" />
         <img src={img} alt="" className='fruit' />
          
        </div>
        
    </div>
    </>
  )
}
export default Home;


 