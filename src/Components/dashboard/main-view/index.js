import React from 'react';
import MainPanel from './main-panel';
import BottomPanel from './bottom-panel';
import './index.css';

class MainView extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="main-view">
        <div className="main-panels">
          <MainPanel data={data.cpu} type="cpu" />
          <MainPanel data={data.memory} type="memory" />
        </div>
        <BottomPanel runningTasks={data.runningTasks} />
      </div>
    );
  }
}

export default MainView;
