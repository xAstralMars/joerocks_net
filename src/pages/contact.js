import React from "react";
import { Routes, Route } from 'react-router-dom';
import '../App.css'
import { NavLink } from "react-router-dom";
import About from './about';
import Products from './products';
import Home from './home';
 
const contact = () => {
    return (
        <div>
            <header>
              <h2 className="logo">joerocks<font className="fontlogo">.net</font></h2>
              <h1 className="header-text">
                Contact
              </h1>
              <nav className="navigation">
                <NavLink to="/home" >Home</NavLink>
                  <NavLink to="/about" >About</NavLink>
                  <NavLink to="/products" >Products</NavLink>
                  {/* <NavLink to="/contact" activeStyle>Contact</NavLink> */}
              </nav>
              <Routes>
                <Route path='/home' element={<Home />}/>
                  <Route path='/about' element={<About />}/>
                  {/* <Route path='/contact' element={<Contact />}/> */}
                  <Route path='/products' element={<Products />}/>
              </Routes>
            </header>
            <h1>Contacts</h1>
            <a className="contactrefa" href="mailto:joe@joerocks.net">Email</a>
        </div>
    );
};
 
export default contact;