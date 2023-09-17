import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import '../App.css'
import { NavLink } from "react-router-dom";
import About from './about';
import Contact from './contact';
import Products from './products'
import {HelpOutline, Home, Search} from 'react-ionicons';
import {HomeSharp} from 'react-ionicons';
import {Cart} from 'react-ionicons';
import {Chatbubble} from 'react-ionicons';
import {Cloud} from 'react-ionicons';
// import { Axios } from "axios";
// const PALM_API_KEY = 'AIzaSyDOZ99Jb6-Do8OMegf9i67asLoWKA--azk';  // replace your API Key

const Artificial = () => {
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

//    const [messages, setMessages] = useState([]);
//    const [inputText, setInputText] = useState('');

//    const generateText = async () => {
//     if (inputText.trim() === '') {
//       return; 
//     }
  
//     const apiUrl = `https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage`;
  
//     const requestData = {
//       prompt: {
//         context: '',
//         examples: [],
//         messages: [{ content: inputText }]
//       },
//       temperature: 0.25,
//       top_k: 40,
//       top_p: 0.95,
//       candidate_count: 1,
//     };
  
//     const headers = {
//       'Content-Type': 'application/json',
//     };
  
//     try {
//       const response = await Axios.post(`${apiUrl}?key=${PALM_API_KEY}`, requestData, {
//         headers,
//       });
  
//       if (response.status === 200) {
//         if (response.data && response.data.candidates && response.data.candidates.length > 0) {
//           const botResponse = response.data.candidates[0].content;
  
//           // Add the user's input to the messages array
//           const newUserMessage = {
//             id: messages.length + 1,
//             text: inputText,
//             sender: 'user', // Set the sender as 'user'
//             timestamp: new Date().getTime(),
//           };
  
//           // Add the bot's response to the messages array
//           const newBotMessage = {
//             id: messages.length + 2,
//             content: botResponse,
//             sender: 'bot', // Set the sender as 'bot'
//             timestamp: new Date().getTime(),
//           };
  
//           setMessages([...messages, newUserMessage, newBotMessage]);
//           setInputText('');
//         } else {
//           console.error('Response structure is not as expected.');
//         }
//       } else {
//         console.error('Google Cloud API request failed with status:', response.status);
//       }
//     } catch (error) {
//       console.error('An error occurred while making the Google Cloud API request:', error);
//     }
// };
   
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
                  <Route path='/home' element={<Home />}/>
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
        <li>
          <NavLink to="/ai">
            <i className="bx bx-pie-chart-alt-2"><Cloud color={'#FFFFFF'} style={{marginTop: "12px"}}></Cloud></i>
            <span className="links_name">AI</span>
          </NavLink>
          <span className="tooltip">AI</span>
        </li>
      </ul>
    </div>
          <div className='homepageWrapper'>
            <div className="homepage-sidebarfix">
                {/* <form onSubmit={(e) => {
                    e.preventDefault();
                    generateText();
                }}>
                    <input type="text" onChange={(e) => {
                        setInputText(e.target.value)
                    }}></input>
                    <button type="submit">Submit</button>
                </form>
                <div>{messages}</div> */}
            </div>
        </div>
      </div>
    );
}

export default Artificial;