import React from 'react';
import './index.css';
import BottomBarChart from '../../../visualisations/BottomBarChart';

const styles = {
  fontSize: '8px'
};
class BottomPanel extends React.Component {
  render() {
    const { runningTasks } = this.props;

    return (
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
            <span>Age</span>
          </div>
          <div className="column cluster-ip">
            <span>Cluster IP</span>
          </div>
          <div className="column cpu-usage">
            <span>CPU</span>
          </div>
          <div className="column memory-usage">
            <span>Memory</span>
          </div>
        </div>
        <div className="table-body">
          {runningTasks.map((task, index) => (
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
                <span>{task.age}</span>
              </div>
              <div className="column cluster-ip">
                <span>{task.clusterIP}</span>
              </div>
              <div className="column cpu-usage">
                <span className="cpu-usage-chart">
                  <BottomBarChart data={task.cpuUsage} />
                </span>
              </div>
              <div className="column memory-usage">
                <span className="memory-usage-chart">
                  <BottomBarChart data={task.memoryUsage} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BottomPanel;
