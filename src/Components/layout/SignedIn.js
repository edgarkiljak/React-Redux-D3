import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { signOut } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';

const signOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;

const navStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center'
  }
});
const SignedIn = props => {
  const navLinks = navStyles();
  return (
    <div className={navLinks.root}>
      <ul className="right">
        <li>
          <a href="#" onClick={props.signOut} to="/">
            Sign out {signOutIcon}
          </a>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedIn);
