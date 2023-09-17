import React from "react";
import { Routes, Route } from 'react-router-dom';
import '../App.css'
import { NavLink } from "react-router-dom";
import About from './about';
import Contact from './contact';
import Home from './home';
import {Help, HelpOutline, Search} from 'react-ionicons';
import {HomeSharp} from 'react-ionicons';
import {Cart} from 'react-ionicons';
import {Chatbubble} from 'react-ionicons';
import {HelpSharp} from 'react-ionicons';
 
const products = () => {
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
                Products
              </h1>
              <nav className="navigation">
                <NavLink to="/home" >Home</NavLink>
                <NavLink to="/about" >About</NavLink>
                <NavLink to="/contact" >Contact</NavLink>
              </nav>
              <Routes>
                <Route path='/home' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
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
            <div className='homepageWrapper'>
              <div className="homepage-sidebarfix">
              <div className='header-homepage'>
                <h2 className='homepage-header' style={{ fontSize: "45px"}}><b>Joe Rocks</b></h2>
              </div>

              <h2 className="programmingh2"><u>Products</u></h2>
              <ol>
                <li><h3 className="ccpp">•<a style={{  color: "#fff" }} href="https://en.wikipedia.org/wiki/PhatBox" target="_blank" rel="noreferrer"> PhatBox</a></h3></li>
                <li><h3>•<a style={{ color: "#fff" }} href="https://www.matthewsvolvosite.com/ipod-volvo-connection" target="_blank" rel="noreferrer"> Volvo iPod Adapter</a></h3></li>
                <li><h3>•<a style={{ color: "#fff" }} href="https://www.cnet.com/reviews/harman-kardon-drive-plus-play-review/" target="_blank" rel="noreferrer"> Drive + Play</a></h3></li>
                <li><h3>•<a style={{ color: "#fff" }} href="https://uk.pcmag.com/gallery/100414/gm-phatnoise-mobile-digital-media-system?p=1" target="_blank" rel="noreferrer"> Mobile Digitial Media System</a></h3></li>
                <li><h3>•<a style={{ color: "#fff" }} href="https://techcrunch.com/2007/01/10/harman-kardon-present-drive-play-2" target="_blank" rel="noreferrer"> Drive + Play 2</a></h3></li>
                <li><h3>•<a style={{ color: "#fff" }} href="https://www.sonicelectronix.com/item-12174-Harman-Kardon-GPS-810.html#:~:text=The%20Harman%20Kardon%20GPS%2D810%20is%20truly%20a,compact%20design%20but%20is%20large%20enough%20to" target="_blank" rel="noreferrer"> GPS 810</a></h3></li>
                <li><h3>• GPS 910</h3></li>
              </ol>

            </div>
            </div>
        </div>
    );
};
 
export default products;