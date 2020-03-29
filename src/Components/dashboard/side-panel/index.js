import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';

class SidePanel extends React.Component {
  handleChange = index => {
    this.props.onChange(index);
  };

  render() {
    const { data, selectedItem } = this.props;
    const serverIcon = <FontAwesomeIcon icon={faServer} />;
    return (
      <div className="side-panel">
        <h1>Workloads &#x25BE;</h1>
        <h3>{serverIcon} Servers &#x25BE;</h3>
        <ul>
          {/* generating list of machine based on data*/}
          {data.map((machine, index) => (
            <li
              className={selectedItem === index ? 'active-server' : null}
              key={index}
              onClick={() => {
                this.handleChange(index);
              }}
            >
              {machine.serverName}
            </li>
          ))}
        </ul>
        <div className="dashboard-side-item-version">
          <p>Test v0.0.1</p>
        </div>
      </div>
    );
  }
}

export default connect()(SidePanel);
