import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import router from './router.png';
import './App.css';

function App(){
    return(
      <Router>
        <div className="App">
          <ul className="App-header">
            <img src={router} alt="Router!"/>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
              </li>
          </ul>
          <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>          
          </Routes>
        </div>
      </Router>
    );
}

export default App;
