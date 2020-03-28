import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/index.css';

const SignedOut = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signin">Sign in</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign up</NavLink>
      </li>
    </ul>
  );
};

export default SignedOut;
