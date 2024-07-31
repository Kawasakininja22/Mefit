import React from 'react';
import './App.css';
import Nav from './Navbar/Nav.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Menu from './menu/Menu.jsx';
 import Review from './Review/Review.jsx';
 import Customer from './Customer/Customer.jsx';


function App() {
  return (
 <div>
   <Nav/>
   <Home/>
   <About/>
   <Menu/>
   <Review/>
   <Customer/>
   
  </div>
  );
}

export default App;
