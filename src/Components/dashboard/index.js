import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  loadDBData,
  updateSelectedServer
} from '../../redux/actions/dataActions';
import SidePanel from './side-panel';
import MainView from './main-view';
import './index.css';

class Dashboard extends Component {
  componentDidMount() {
    this.props.loadDBData();
  }

  handleServerChange = index => {
    this.props.updateSelectedServer(index);
  };

  render() {
    const { authStatus, dashboard } = this.props;
    if (!authStatus.uid) return <Redirect to="/signin" />;

    if (dashboard.data.length === 0) {
      return null;
    }
    return (
      <div className="dashboard-container">
        <SidePanel
          selectedItem={dashboard.selectedServer}
          data={dashboard.data}
          onChange={this.handleServerChange}
        />
        <MainView data={dashboard.data[dashboard.selectedServer]} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadDBData: () => dispatch(loadDBData()),
  updateSelectedServer: index => dispatch(updateSelectedServer(index))
});

const mapStateToProps = state => {
  return {
    authStatus: state.firebase.auth,
    dashboard: state.dashboard
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Dashboard));
