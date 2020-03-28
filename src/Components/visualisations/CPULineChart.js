import * as d3 from 'd3';
import React, { Component } from 'react';

const width = 400;
const height = 200;
const margin = { top: 20, right: 5, bottom: 20, left: 35 };
const green = '#00ded0';

class CPULineChart extends Component {
  state = {
    cpu: null, // svg path command for all cpu points
    // d3 helpers
    xScale: d3.scaleTime().range([margin.left, width - margin.right]),
    yScale: d3.scaleLinear().range([height - margin.bottom, margin.top]),
    lineGenerator: d3.line()
  };

  xAxis = d3
    .axisBottom()
    .scale(this.state.xScale)
    .tickFormat(d3.timeFormat('%b'));
  yAxis = d3.axisBottom().scale(this.state.yScale);

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null; // data hasn't been loaded yet so do nothing
    const { data } = nextProps;
    const { yScale, xScale, lineGenerator } = prevState;

    // data has changed, so recalculate scale domains
    const timeDomain = d3.extent(data, d => d.cpu.date);
    const cpuMax = d3.max(data, d => d.cpu.high);
    xScale.domain(timeDomain);
    yScale.domain([0, cpuMax]);

    // Calculate line for CPU
    lineGenerator.x(d => xScale(d.cpu.date));
    lineGenerator.y(d => yScale(d.cpu.high));

    const cpu = lineGenerator(data);

    console.log(cpu);
    // this.setState({ cpu });
    return cpu;
  }

  componentDidUpdate() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  render() {
    return (
      <svg width={width} height={height}>
        <path
          d={this.state.cpuLine}
          fill="none"
          stroke={green}
          strokeWidth="2"
        />
        <g ref="xAxis" transform={`translate(0, ${height - margin.bottom})`} />
        <g ref="yAxis" transform={`translate(${margin.left}, 0)`} />
      </svg>
    );
  }
}

export default CPULineChart;
