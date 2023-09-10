import React from "react";
import { Routes, Route } from 'react-router-dom';
import '../App.css'
import { NavLink } from "react-router-dom";
import About from './about';
import Contact from './contact';
import Products from './products'
 
const home = () => {
    return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1.0" />
          <title>login and register test</title>
          <link rel="stylesheet" href="App.css" />
          <header>
              <h2 className="logo"><font className="fontlogo2">joerocks</font><font className="fontlogo">.net</font></h2>
              <nav className="navigation">
                  {/* <NavLink to="/home" activeStyle>Home</NavLink> */}
                  <NavLink to="/about" >About</NavLink>
                  <NavLink to="/products" >Products</NavLink>
                  <NavLink to="/contact" >Contact</NavLink>
              </nav>
                <Routes>
                  {/* <Route path='/home' element={<Home />}/> */}
                  <Route path='/about' element={<About />}/>
                  <Route path='/contact' element={<Contact />}/>
                  <Route path='/products' element={<Products />}/>
                </Routes>
          </header>
        <div className='homepageWrapper'>
            <div className='header-homepage'>
              <h2 className='homepage-header' style={{ fontSize: "45px"}}><b>Joe Rocks</b></h2>
            </div>

            <i className="latini" onMouseEnter={() => {document.querySelector('.latini').textContent = "The laws remain silent when the weapons speak.";}} onMouseLeave={() => {document.querySelector('.latini').textContent = "Silent leges inter arma";}} style={{ color: "#fff", marginLeft: "4.6%"}}>Silent leges inter arma</i>
            <h2 className="programmingh2"><u>Programming</u></h2>
            <ol>
                <li><h3 className="ccpp">•<a style={{ color: "#fff" }} href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank" rel="noreferrer"> C++</a></h3></li>
                <li><h3>•<a style={{ color: "#fff" }} href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noreferrer"> C</a></h3></li>
                <li><h3>•<a style={{ color: "#fff" }} href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank" rel="noreferrer"> C#</a></h3></li>
                <li><h3>•<a style={{ color: "#fff" }} href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank" rel="noreferrer"> Java</a></h3></li>
                <li><h3>•<a style={{ color: "#fff" }} href="https://en.wikipedia.org/wiki/Kotlin_(programming_language)" target="_blank" rel="noreferrer"> Kotlin</a></h3></li>
            </ol>
            
            <h2 className="programmingh2"><u>Languages</u></h2>
            <ol>
                <li><h3 className="ccpp">• English</h3></li>
                <li><h3>• Italian</h3></li>
                <li><h3>• Spanish</h3></li>
                <li><h3>• Hindi</h3></li>
                <li><h3>• Tamil</h3></li>
            </ol>

        </div>
      </div>
    );
};
 
export default home;