import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navigation.css'
function Navigation() {
  return (
    <AppBar position="static" className="toolbar">
      <Toolbar>
        <Typography variant="h6" component="div">
        
        </Typography>
        <nav>
            
          <ul className="nav-list">
            <li>
              <Link to="/">🏠Home</Link>
            </li>
            <li>
              <Link to="/Webseries">🎥Webseries</Link>
            </li>
            <li>
              <Link to="/Comedy">🤣Comedy</Link>
            </li>
            <li>
              <Link to="/Contact">📞Contact</Link>
            </li>
            <li>
              <Link to="/Login">🙋‍♀️login</Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
