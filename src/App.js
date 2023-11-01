import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Webseries from './Components/Webseries';
import Comedy from './Components/Comedy';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Webseries" element={<Webseries/>} />
          <Route path="/Comedy" element={<Comedy/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}
export default App 