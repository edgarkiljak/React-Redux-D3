import React from 'react';
import './index.css';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { connect } from 'react-redux';

const Navbar = props => {
  const { authStatus } = props;
  const links = authStatus.uid ? <SignedIn /> : <SignedOut />;
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="container">{links}</div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    authStatus: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Navbar);
