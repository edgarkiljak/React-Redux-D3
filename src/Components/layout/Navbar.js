import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.css';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="container">
          <SignedIn />
          <SignedOut />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
