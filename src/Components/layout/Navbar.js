import React from 'react';
import './index.css';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { connect } from 'react-redux';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const navStyles = makeStyles({
  root: {
    height: '50px',
    backgroundColor: '#FF6864'
  }
});

const Navbar = props => {
  const navLinks = navStyles();
  const { authStatus } = props;
  const links = authStatus.uid ? <SignedIn /> : <SignedOut />;
  return (
    <AppBar className={navLinks.root} position="relative">
      <div className="nav-wrapper">
        <div className="container">{links}</div>
      </div>
    </AppBar>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    authStatus: state.firebase.auth
  };
};
export default connect(mapStateToProps, null)(Navbar);
