import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/index.css';

const SignedOut = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signin">LOG IN</NavLink>
      </li>
      <li>
        <NavLink to="/signup">SIGN UP</NavLink>
      </li>
    </ul>
  );
};

export default SignedOut;
