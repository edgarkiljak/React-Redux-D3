import * as d3 from 'd3';
import React, { Component } from 'react';

const width = 60;
const height = 10;
const margin = { top: 0, right: 0, bottom: 0, left: 0 };

class BottomBarChart extends Component {
  state = {
    cpuLine: null, // svg path command for all cpu points
    cpuArea: null,
    // d3 helpers
    xScale: d3.scaleTime().range([margin.left, width - margin.right]),
    yScale: d3.scaleLinear().range([height - margin.bottom, margin.top]),
    lineGenerator: d3.line().curve(d3.curveLinear),
    areaGenerator: d3.area().curve(d3.curveStep)
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null; // data hasn't been loaded yet so do nothing
    const { data } = nextProps;
    const { yScale, xScale, lineGenerator, areaGenerator } = prevState;

    // data has changed, so recalculate scale domains
    const timeDomain = d3.extent(data, d => new Date(d.date));
    const cpuMax = d3.max(data, d => d.high);
    xScale.domain(timeDomain);
    yScale.domain([0, cpuMax]);

    // Calculate line for CPU
    lineGenerator.x(d => xScale(new Date(d.date)));
    lineGenerator.y(d => yScale(d.high));

    // Area line for CPU
    areaGenerator.x(d => xScale(new Date(d.date)));
    areaGenerator.y0(d => yScale(0));
    areaGenerator.y1(d => yScale(d.high));

    const cpuLine = lineGenerator(data);
    const cpuArea = areaGenerator(data);

    return { cpuLine, cpuArea };
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <path d={this.state.cpuArea} className="area" fill="red" />
        <g ref="xAxis" transform={`translate(0, ${height - margin.bottom})`} />
        <g ref="yAxis" transform={`translate(${margin.left}, 0)`} />
      </svg>
    );
  }
}

export default BottomBarChart;
