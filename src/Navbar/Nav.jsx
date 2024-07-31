 
import React from 'react'; 
import './Nav.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-scroll';

// const ls = localStorage;
// const a = "example";


  function Nav() {
  return (
    <>
    
  <nav class="navbar navbar-expand-lg ">
   <div class="container-fluid">
    
    <a class="navbar-brand" href="#">
      
      <span className="navbar-text">MEFIT</span>
    </a> 
    
      <form >
        
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link 
      to="About" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={800} 
    >
      Home
    </Link>
        </li>
  
        <li class="nav-item">
        <Link 
         to="Menu" 
          spy={true} 
           smooth={true} 
           offset={50} 
            duration={800} 
          >
             Menu 
         </Link>
        </li>

        <li class="nav-item">
        <Link 
      to="Review" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={900} 
    >
       About
    </Link>
        </li>

        <li class="nav-item">
        <Link 
         to="Contact" 
          spy={true} 
           smooth={true} 
           offset={50} 
            duration={1100} 
          >
             Contact 
         </Link>
        </li>

        <li>
        <Link 
         to="/" 
          spy={true} 
           smooth={true} 
           offset={50} 
            duration={1100} 
          >
               <AccountCircleIcon/>
         </Link>
         
        </li>
        
      </ul>
      </form>
    </div>
 
</nav>
    </> 
  );
}

export default Nav;