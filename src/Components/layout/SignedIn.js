import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/index.css';
import { signOut } from '../../Redux/actions/authActions';
import { connect } from 'react-redux';

const SignedIn = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/" className="avatar">
          EK
        </NavLink>
      </li>
      <li>
        <a href="#" onClick={props.signOut} to="/">
          LOG OUT
        </a>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedIn);
