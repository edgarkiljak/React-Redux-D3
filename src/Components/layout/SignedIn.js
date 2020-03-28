import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { signOut } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const signOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;
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
          Sign out {signOutIcon}
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
