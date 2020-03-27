import React, { Component } from 'react';
import './styles/index.css';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { authStatus } = this.props;
    if (!authStatus.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard-container">
        <div className="dashboard-side">
          <div className="dashboard-side-item-container">
            <NavLink to="/project1" className="dashboard-side-item">
              套裝1
            </NavLink>
            <NavLink to="/project2" className="dashboard-side-item">
              套裝2
            </NavLink>
          </div>
        </div>
        <div className="dashboard-main">
          <div className="dashboard-main-top">
            <div className="dashboard-main-top-item-container">
              <div className="dashboard-main-top-item dashboard-main-top-item-1"></div>
              <div className="dashboard-main-top-item dashboard-main-top-item-2"></div>
            </div>
          </div>
          <div className="dashboard-main-bottom">
            <div className="dashboard-main-bottom-item-container">
              <div className="dashboard-main-bottom-item"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    authStatus: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Dashboard);
