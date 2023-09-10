import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import About from './pages/about';
import Products from './pages/products';
import Notfound from './pages/notfound';
import Home from './pages/home'
import { Navigate as Redirect } from 'react-router';

function App() {
  return (
        <Router>
          <Routes>
              <Route path='/' element={ <Redirect to="/home" /> }/>
              <Route path='/home' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/products' element={<Products />}/>
              <Route path='*' element={<Notfound />}></Route>
            </Routes>
      </Router>
    );
}

export default App;
