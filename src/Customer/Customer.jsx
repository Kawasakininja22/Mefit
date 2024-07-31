import React from 'react';
import './Customer.css';
import cus from '../Asset/back1.png';

 function Customer() {
  return (
 
   <div className='wrap'>

   <div className='container-fluid main'>
    <h1>Contact Us</h1>

    <div className='row'  id='contact'>
      
      <div className='col-lg-6 col-sm-12 col-md-6' id='inputfield'>
        <form>
        <div className='input-box'>
      
        <div className='input-field'>
         <label htmlFor="Name ">Name</label>
         <input type="text" className='input' id='name' required/>
        </div>
        
        <div className='input-field'>
         <label htmlFor="Email ">Email</label>
         <input type="text" className='input' id='Mailid' required/>
        </div>
      
        <div className='input-field'>
         <label htmlFor="contact">Contact No</label>
         <input type="text" className='input' id='Contact' required/>
        </div>

        <div className='input-field'>
         <label htmlFor="Message">Message</label>
         <input type="text" className='input' id='Mailid' required/>
        </div>
            <button>submit</button>
         </div>
         </form>
      </div>

      <div className='col col-sm-12  ' id='image'>
        <div className='image'>
        {/* <img src={cus} alt="" /> */}
        </div>

      </div>
    </div>
   </div>
   </div>
 
  )
}

export default Customer;
