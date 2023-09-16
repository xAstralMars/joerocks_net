import React from "react";
import { Routes, Route } from 'react-router-dom';
import '../App.css'
import { NavLink } from "react-router-dom";
import Home from './home';
import About from './about';
import Contact from './contact';
import Products from './products';
 
const notfound = () => {
    return (
        <div>
            <header>
              <h2 className="logo">Liberate</h2>
              <nav className="navigation">
                  <NavLink to="/home" >Home</NavLink>
                  <NavLink to="/products" >Products</NavLink>
                  <NavLink to="/contact" >Contact</NavLink>
                  <NavLink to="/about" >About</NavLink>
                  {/* <NavLink to="/contact" activeStyle>Contact</NavLink> */}
              </nav>
              <Routes>
                  <Route path='/home' element={<Home />}/>
                  {/* <Route path='/home:username' element={<Home />}/> */}
                  <Route path='/products' element={<Products />}/>
                  <Route path='/contact' element={<Contact />}/>
                  <Route path='/about' element={<About />}/>
              </Routes>
            </header>
            <div className="notfound-container">
                <div>
                    <h1>404</h1>
                    <h3>Page Not Found</h3>
                </div>
            </div>
            
        </div>
    );
};
 
export default notfound;