import React, { Component } from 'react';
import './styles/index.css';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadDBData } from '../../Redux/actions/dataActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';
import CPULineChart from '../visualisations/CPULineChart';

class Dashboard extends Component {
  componentDidMount() {
    this.props.loadDBData();
  }

  render() {
    const { authStatus, data } = this.props;
    console.log(data);
    if (!authStatus.uid) return <Redirect to="/signin" />;
    const serverIcon = <FontAwesomeIcon icon={faServer} />;
    const dbIcon = <FontAwesomeIcon icon={faDatabase} />;
    return (
      <div className="dashboard-container">
        <div className="dashboard-side">
          <div className="dashboard-side-item-container">
            <h2>Workloads &#x25BE;</h2>
            <ul>
              <li>
                <NavLink to="/pods" className="dashboard-side-item">
                  {serverIcon} Servers
                </NavLink>
              </li>
              <li>
                <NavLink to="/repset" className="dashboard-side-item">
                  {dbIcon} Database Set
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="dashboard-side-item-version">
            <p>Test v0.0.1</p>
          </div>
        </div>
        <div className="dashboard-main">
          <div className="dashboard-main-top-container">
            <div className="dashboard-main-top-left">
              <div className="dashboard-main-top-item-container">
                <div className="dashboard-main-top-item dashboard-main-top-item-1">
                  <CPULineChart data={data[0]} />
                </div>
              </div>
            </div>
            <div className="dashboard-main-top-right">
              <div className="dashboard-main-top-item-container">
                <div className="dashboard-main-top-item dashboard-main-top-item-2"></div>
              </div>
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

const mapDispatchToProps = dispatch => ({
  loadDBData: () => dispatch(loadDBData())
});

const mapStateToProps = state => {
  return {
    authStatus: state.firebase.auth,
    data: state.dbData.dbData
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
