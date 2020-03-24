import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/index.css';

const SignedOut = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">LOG IN</NavLink>
      </li>
      <li>
        <NavLink to="/">SIGN UP</NavLink>
      </li>
    </ul>
  );
};

export default SignedOut;
