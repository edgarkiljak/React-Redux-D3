import React, { Component } from 'react';
import './index.css';
import BottomBarChart from '../../../visualisations/BottomBarChart';
import sortTypes from './sortTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortDown,
  faSortUp,
  faSort,
  faCheckCircle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

const styles = {
  fontSize: '8px'
};
class BottomPanel extends Component {
  state = {
    currentSort: 'Up',
    category: ''
  };
  onSortChange = category => {
    debugger;
    const { currentSort } = this.state;
    let direction;
    if (category !== this.state.category) {
      direction = 'Up';
    } else {
      direction = currentSort === 'Down' ? 'Up' : 'Down';
    }

    this.setState({
      currentSort: direction,
      category: category
    });
  };

  render() {
    console.log(this.state.category, this.state.currentSort);
    const { currentSort, category } = this.state;
    const { runningTasks } = this.props;

    return (
      runningTasks.length >= 0 && (
        <div className="bottom-panel">
          <div className="table-header row">
            <div className="column name">
              <span>Name</span>
              <button
                id="btn-name"
                onClick={() => {
                  this.onSortChange('name');
                }}
              >
                &nbsp;
                <FontAwesomeIcon icon={faSort} />
              </button>
            </div>
            <div className="column task-status">
              <span>Status</span>
              <button
                id="btn-status"
                onClick={() => {
                  this.onSortChange('status');
                }}
              >
                &nbsp;
                <FontAwesomeIcon icon={faSort} />
              </button>
            </div>
            <div className="column label">
              <span>Label</span>
            </div>
            <div className="column age">
              <span>
                Age
                <button
                  id="btn-age"
                  onClick={() => {
                    this.onSortChange('age');
                  }}
                >
                  &nbsp;
                  <FontAwesomeIcon icon={faSort} />
                </button>
              </span>
            </div>
            <div className="column cluster-ip">
              <span>Cluster IP</span>
            </div>
            <div className="column cpu-usage">
              <span>CPU (cores)</span>
            </div>
            <div className="column memory-usage">
              <span>Memory (bytes) </span>
            </div>
          </div>
          <div className="table-body">
            {[...runningTasks]
              .sort(sortTypes[currentSort].fn[category])
              .map((task, index) => (
                <div className="table-item row" key={index}>
                  <div className="column name">
                    {task.status === 'Running' ? (
                      <FontAwesomeIcon icon={faCheckCircle} />
                    ) : (
                      <FontAwesomeIcon icon={faTimesCircle} />
                    )}
                    &nbsp;
                    <span>{task.name}</span>
                  </div>
                  <div className="column task-status">
                    <span></span>
                    <span>{task.status}</span>
                  </div>
                  <div className="column label">
                    <span>{task.label}</span>
                  </div>
                  <div className="column age">
                    <span>{task.age} minutes</span>
                  </div>
                  <div className="column cluster-ip">
                    <span>{task.clusterIP}</span>
                  </div>
                  <div className="column cpu-usage">
                    <span className="cpu-usage-chart">
                      <BottomBarChart data={task.cpuUsage} />
                    </span>
                    &nbsp;
                    <p style={{ fontSize: '8px' }}>{task.cpuUsage[0].high}</p>
                  </div>
                  <div className="column memory-usage">
                    <span className="memory-usage-chart">
                      <BottomBarChart data={task.memoryUsage} />
                    </span>
                    <p style={{ fontSize: '8px' }}>
                      &nbsp;
                      {task.memoryUsage[0].high} MiB
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )
    );
  }
}

export default BottomPanel;
