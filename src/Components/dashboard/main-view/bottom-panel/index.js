import React, { Component } from 'react';
import './index.css';
import BottomBarChart from '../../../visualisations/BottomBarChart';
import sortTypes from './sortTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortDown,
  faSortUp,
  faSort
} from '@fortawesome/free-solid-svg-icons';

const styles = {
  fontSize: '8px'
};
class BottomPanel extends Component {
  state = {
    currentSort: 'Sort'
  };

  onSortChange = () => {
    const { currentSort } = this.state;

    let nextSort;

    if (currentSort === 'Down') nextSort = 'Up';
    else if (currentSort === 'Up') nextSort = 'Sort';
    else if (currentSort === 'Sort') nextSort = 'Down';

    console.log(nextSort);
    this.setState({
      currentSort: nextSort
    });
  };

  render() {
    const { runningTasks } = this.props;
    const { currentSort } = this.state;

    return (
      runningTasks.length >= 0 && (
        <div className="bottom-panel">
          <div className="table-header row">
            <div className="column name">
              <span>Name</span>
            </div>
            <div className="column task-status">
              <span>Status</span>
            </div>
            <div className="column label">
              <span>Label</span>
            </div>
            <div className="column age">
              <span>
                Age
                <button onClick={this.onSortChange}>
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
              <button onClick={this.onSortChange}>
                &nbsp;
                <FontAwesomeIcon icon={faSort} />
              </button>
            </div>
            <div className="column memory-usage">
              <span>Memory (bytes) </span>
              <button onClick={this.onSortChange}>
                &nbsp;
                <FontAwesomeIcon icon={faSort} />
              </button>
            </div>
          </div>
          <div className="table-body">
            {[...runningTasks]
              .sort(sortTypes[currentSort].fn)
              .map((task, index) => (
                <div className="table-item row" key={index}>
                  <div className="column name">
                    <span>{task.name}</span>
                  </div>
                  <div className="column task-status">
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
