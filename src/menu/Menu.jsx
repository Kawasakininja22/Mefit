
import React from 'react'
import veg from '../Asset/vegbowl.png';
import fruit from '../Asset/fruitbowl.png';
import meat from '../Asset/meatbowl.png';
import 'bootstrap/dist/css/bootstrap.css';
 import './Menu.css';

 function Menu() {
  return (
    <>
     <div  className='Menu'>
    <div className='heading'>Bowl's</div>
    <div className='row'>
      <div className='col-lg'>
      <div className="card"  >
      <img src={veg} className="card-img" alt="..."/>
       <div className="card-body">
       <h5 className="card-title"> Veg Bowl</h5>
       <button className='btn'>View More</button>
      </div>
       </div>
      </div>

      <div className='col-lg'>
      <div class="card"  >
        <img src= {fruit}  className="card-img" alt="..."/>
        <div class="card-body">
        <h5 class="card-title"> Fruit Bowl</h5>
         <p class="card-text"> </p>
         <button className='btn'>View More</button>
  </div>
     </div>
      </div>

      <div className='col-lg'>
      <div class="card"  >
  <img src= {meat}  className="card-img" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> Meat Bowl</h5>
    <p class="card-text"> </p>
     <button className='btn'>View More</button>
  </div>
     </div>
      </div>

    </div>
    </div>
    </>
  )
}
export default Menu;