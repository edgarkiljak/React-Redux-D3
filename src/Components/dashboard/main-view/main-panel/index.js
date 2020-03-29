import React from 'react';
import './index.css';

class MainPanel extends React.Component {
  render() {
    const { data, type } = this.props;
    console.log('TYPE ====', type);
    console.log('TYPE ====', data);

    return (
      <div className="panel-container">
        <div className="panel">
          <h3>{type === 'cpu' ? 'CPU Usage' : 'Memory Usage'}</h3>
          d3 manipulation
          <code>
            <pre style={{ maxHeight: 280, overflow: 'scroll' }}>
              {JSON.stringify(data, undefined, 2)}
            </pre>
          </code>
        </div>
      </div>
    );
  }
}

export default MainPanel;
