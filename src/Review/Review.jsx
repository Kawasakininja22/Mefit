// // import React from 'react';
// // import vegrev from '../Asset/vegrev.png';
// // import './Review.css';
// // import StarIcon from '@mui/icons-material/Star';
// // import StarBorderIcon from '@mui/icons-material/StarBorder';
// // function Review() {
// //   return (
// //     <>
   
      
// //       <div className='wrapper'>
// //       <h2 className='head'>Customer Review</h2>
// //         <div className='container-fluid' id='container'>
// //         <div className='row' id='row'>
// //         <div class="col-md-6 side-image">
                   
// //            </div>
// //           <div className='col-md-6'  id='contentrev' >
// //             <h4>Meat Bowl</h4>
// //             <ul >
// //               <li><StarIcon/></li>
// //               <li><StarIcon/></li>
// //               <li><StarIcon/></li>
// //               <li><StarIcon/></li>
// //               <li><StarBorderIcon/></li>
// //             </ul>
// //             {/* <a ><StarIcon/></a>
// //             <a ><StarIcon/></a>
// //             <a ><StarIcon/></a>
// //             <a ><StarIcon/></a>
// //             <a ><StarBorderIcon/></a> */}
            
// //             <p>I highly recommend the Meat Salad Bowl at MEFIT. It’s a perfect choice for anyone looking to enjoy a nutritious and delicious meal with a good balance of protein and fresh vegetables. I will definitely be returning to have it again! </p>
// //           </div>
          
// //         </div>
// //         </div>
// //     </div>
// //     </>
// //   )
// // }
// // export default  Review;

// ########
// const Carousel = () => {
//   useEffect(() => {
//     // Ensure jQuery and Bootstrap's JavaScript is properly initialized
//     window.jQuery = require('jquery');
//     require('bootstrap');
//   }, []);


//   return (
  
//         <div className='review'>
//           <h1>Customer Review</h1>
//           <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-inner">
//               <div className="carousel-item active">
//                 <img className="d-block w-100" src={rev1} alt="First slide" />
//               </div>
//               <div className="carousel-item ">
//                 <img className="d-block w-100" src={rev2} alt="Second slide" />
//               </div>
//             </div>
//             <div className='button'>

//               <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">

//                 <img src={left} alt="Previous" />
//                 <span className="sr-only">Previous</span>

//               </a>

//               <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">

//                 <img src={right} alt="Next" />

//                 <span className="sr-only">Next</span>
                
//               </a>
//             </div>
//           </div>
//         </div>
//       );
//     }
  // ##########
 

import React, { useEffect } from 'react';
 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import rev1 from '../Asset/Rev1.png';
import rev2 from '../Asset/Rev2.png';
 
import './Review.css';

function Review() {
 return( 
  
<div className='Review' id='Review'>
<div id="carouselExampleIndicators" class="carousel slide">
<h1>Customer Review</h1>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>

  <div class="carousel-inner">
    <div class="carousel-item ">
      <img src= {rev1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item active">
      <img src= {rev2} class="d-block w-100" alt="..."/>
    </div>
  </div>

  <button className="carousel-control-prev" type="button"  id="button" data-bs-target ="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button"  id="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
</div>
 )}

 

export default Review;
