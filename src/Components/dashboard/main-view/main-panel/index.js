import React from 'react';
import './index.css';
import TopLineChart from '../../../visualisations/TopLineChart';

class MainPanel extends React.Component {
  render() {
    const { data, type } = this.props;
    console.log('TYPE ====', type);
    console.log('TYPE ====', data);

    return (
      <div className="panel-container">
        <div className="panel">
          <h3>
            {type === 'cpu'
              ? 'CPU Usage (accummulated)'
              : 'Memory Usage (accummulated)'}
          </h3>
          <div className={type === 'cpu' ? 'CPULineChart' : 'MemoryLineChart'}>
            <TopLineChart data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPanel;
