import React from "react";
import { Routes, Route } from 'react-router-dom';
import '../App.css'
import { NavLink } from "react-router-dom";
import Contact from './contact';
import Products from './products';
import Home from './home';
 
const about = () => {
    return (
        <div>
            <header>
            <h2 className="logo">joerocks<font className="fontlogo">.net</font></h2>
              <h1 className="header-text">
                About
              </h1>
              <nav className="navigation">
                <NavLink to="/home" activeStyle>Home</NavLink>
                <NavLink to="/products" activeStyle>Products</NavLink>
                <NavLink to="/contact" activeStyle>Contact</NavLink>
                {/* <NavLink to="/contact" activeStyle>Contact</NavLink> */}
              </nav>
              <Routes>
                <Route path='/home' element={<Home />}/>
                  {/* <Route path='/home:username' element={<Home />}/> */}
                  <Route path='/products' element={<Products />}/>
                  <Route path='/contact' element={<Contact />}/>
                  {/* <Route path='/services' element={<Services />}/> */}
              </Routes>
            </header>
        </div>
    );
};
 
export default about;