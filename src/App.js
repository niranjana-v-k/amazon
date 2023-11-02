import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Webseries from './Components/Webseries';
import Comedy from './Components/Comedy';
import Navigation from './Navigation/Navigation';

import Contact from './Components/Contact';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Webseries" element={<Webseries/>} />
          <Route path="/Comedy" element={<Comedy/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Login" element={<Login/>}/>
          
        
        </Routes>
      </div>
    </Router>
  );
}
export default App 