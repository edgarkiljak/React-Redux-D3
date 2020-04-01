import React from 'react';
import { shallow } from 'enzyme';
import TopLineChart from '../../Components/visualisations/TopLineChart';

describe('Visualisation components test', () => {
  it('Component with CPU-svg class exists ', () => {
    const wrapper = shallow(<TopLineChart />);
    expect(wrapper.find('.CPU-svg').toBeDefined);
  });

  it('Area chart has a path', () => {
    const wrapper = shallow(<TopLineChart />);
    console.log(wrapper.debug());
    const cpuPath = wrapper.find('path.area');
    expect(cpuPath.props()).toHaveProperty('d');
  });
});
