import React from "react";
import { Routes, Route } from 'react-router-dom';
import '../App.css'
import { NavLink } from "react-router-dom";
import Contact from './contact';
import Products from './products';
import Home from './home';
import {HelpOutline, Search} from 'react-ionicons';
import {HomeSharp} from 'react-ionicons';
import {Cart} from 'react-ionicons';
import {Chatbubble} from 'react-ionicons';
 
const about = () => {
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
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
        <div className="logo_name"><font className="fontlogo2">joerocks</font><font className="fontlogo">.net</font></div>
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
          <NavLink to="/home">
            <i className="bx bx-grid-alt"><HomeSharp color={'#FFFFFF'} style={{marginTop: "12px"}}></HomeSharp></i>
            <span className="links_name">Home</span>
          </NavLink>
          <span className="tooltip">Home</span>
        </li>
        <li>
          <NavLink to="/about">
            <i className="bx bx-user"><HelpOutline color={'#FFFFFF'} style={{marginTop: "12px"}}></HelpOutline></i>
            <span className="links_name">About</span>
          </NavLink>
          <span className="tooltip">About</span>
        </li>
        <li>
          <NavLink to="/products">
            <i className="bx bx-chat"><Cart color={'#FFFFFF'} style={{marginTop: "12px"}}></Cart></i>
            <span className="links_name">Products</span>
          </NavLink>
          <span className="tooltip">Products</span>
        </li>
        <li>
          <NavLink to="/contact">
            <i className="bx bx-pie-chart-alt-2"><Chatbubble color={'#FFFFFF'} style={{marginTop: "12px"}}></Chatbubble></i>
            <span className="links_name">Contact</span>
          </NavLink>
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