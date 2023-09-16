import React from "react";
import { Routes, Route } from 'react-router-dom';
import '../App.css'
import { NavLink } from "react-router-dom";
import Contact from './contact';
import Products from './products';
import Home from './home';
import {Search} from 'react-ionicons';
import {HomeSharp} from 'react-ionicons';
 
const about = () => {
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");
  function menuBtnChange() {
    try {
      if(sidebar.classList.contains("open") && sidebar){ 
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
      }else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
      }
    } catch {
      console.log("heyyyy... thats not supposed to happen")
    }
   }
    return (
        <div>
            <header>
            <h2 className="logo">joerocks<font className="fontlogo">.net</font></h2>
              <h1 className="header-text">
                About
              </h1>
              <nav className="navigation">
                <NavLink to="/home" >Home</NavLink>
                <NavLink to="/products" >Products</NavLink>
                <NavLink to="/contact" >Contact</NavLink>
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
            <div className="sidebar">
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus icon"></i>
        <div className="logo_name">joerocks.net</div>
        <i className="bx bx-menu" id="btn" onClick={() => {
            let sidebar = document.querySelector(".sidebar");
            sidebar.classList.toggle("open");
            menuBtnChange();//calling the function(optional)
          }}><b>≡</b></i>
      </div>
      <ul className="nav-list">
      <li>
          <i className="bx bx-search" onClick={() => {
            let sidebar = document.querySelector(".sidebar");
            sidebar.classList.toggle("open");
            menuBtnChange(); //calling the function(optional)
          }}><Search className="search-icon" color={'#FFFFFF'} style={{ marginTop: "12px" }} /></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <a href="/home">
            <i className="bx bx-grid-alt"><HomeSharp color={'#FFFFFF'} style={{marginTop: "12px"}}></HomeSharp></i>
            <span className="links_name">Home</span>
          </a>
          <span className="tooltip">Home</span>
        </li>
        <li>
          <a href="/about">
            <i className="bx bx-user"></i>
            <span className="links_name">About</span>
          </a>
          <span className="tooltip">About</span>
        </li>
        <li>
          <a href="/products">
            <i className="bx bx-chat"></i>
            <span className="links_name">Products</span>
          </a>
          <span className="tooltip">Products</span>
        </li>
        <li>
          <a href="/contact">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Contact</span>
          </a>
          <span className="tooltip">Contact</span>
        </li>
      </ul>
    </div>
            <div className="homepageWrapper">
              <div className="homepage-sidebarfix">

              </div>
            </div>
        </div>
    );
};
 
export default about;