import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/index.css';

const SignedIn = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/" className="avatar">
          EK
        </NavLink>
      </li>
      <li>
        <NavLink to="/">LOG OUT</NavLink>
      </li>
      <li>
        <NavLink to="/">PROJECTS</NavLink>
      </li>
    </ul>
  );
};

export default SignedIn;
