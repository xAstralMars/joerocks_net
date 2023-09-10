import React from "react";
import { Routes, Route } from 'react-router-dom';
import '../App.css'
import { NavLink } from "react-router-dom";
import About from './about';
import Contact from './contact';
import Home from './home';
 
const products = () => {
    return (
        <div>
            <header>
            <h2 className="logo">joerocks<font className="fontlogo">.net</font></h2>
            <h1 className="header-text">
                Products
              </h1>
              <nav className="navigation">
                <NavLink to="/home" activeStyle>Home</NavLink>
                <NavLink to="/about" activeStyle>About</NavLink>
                <NavLink to="/contact" activeStyle>Contact</NavLink>
              </nav>
              <Routes>
                <Route path='/home' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
              </Routes>
            </header>
            <div className='homepageWrapper'>
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
    );
};
 
export default products;