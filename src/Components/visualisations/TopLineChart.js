import * as d3 from 'd3';
import React, { Component } from 'react';

const width = 500;
const height = 300;
const margin = { top: 20, right: 20, bottom: 100, left: 65 };

class TopLineChart extends Component {
  state = {
    cpuLine: null, // svg path command for all cpu points
    cpuArea: null,
    // d3 helpers
    xScale: d3.scaleTime().range([margin.left, width - margin.right]),
    yScale: d3.scaleLinear().range([height - margin.bottom, margin.top]),
    lineGenerator: d3.line().curve(d3.curveLinear),
    areaGenerator: d3.area().curve(d3.curveLinear)
  };

  //Draw Axes
  componentDidMount() {
    d3.select(this.refs.xAxis)
      .call(this.xAxis)
      .selectAll('text')
      .attr('y', 0)
      .attr('x', 1)
      .attr('dy', '2em')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');
    d3.select(this.refs.yAxis).call(this.yAxis);
  }
  //Draw axes
  componentDidUpdate() {
    d3.select(this.svg)
      .append('text')
      .attr(
        'transform',
        'translate(' +
          width / 2 +
          ' ,' +
          (height + margin.top + 20) +
          ') rotate(-90deg)'
      )
      .attr('fill', 'black')
      .style('text-anchor', 'middle')
      .text('Date');
    d3.select(this.refs.xAxis)
      .call(this.xAxis)
      .selectAll('text')
      .attr('y', 0)
      .attr('x', 1)
      .attr('dy', '2em')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  //Define axis
  xAxis = d3
    .axisBottom()
    .scale(this.state.xScale)
    .tickFormat(d3.timeFormat('%I:%M'))
    .ticks(5)
    .tickSizeOuter(0)
    .tickSizeInner(0);
  yAxis = d3
    .axisLeft()
    .scale(this.state.yScale)
    .ticks(5)
    .tickSizeOuter(0)
    .tickSizeInner(0);

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
    const { type } = this.props;
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 500 300"
        className={type === 'cpu' ? 'CPU-svg' : 'Memory-svg'}
      >
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="70%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF4653" stopOpacity="0.6" />

            <stop offset="80%" stopColor="#e6e2dd" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d={this.state.cpuArea}
          className="area"
          fill="url(#areaGradient)"
        />
        <g
          ref="xAxis"
          transform={`translate(0, ${height - margin.bottom} )`}
          strokeWidth="0"
        />
        <g ref="yAxis" transform={`translate(${margin.left}, 0)`}>
          <text
            fill="grey"
            fontSize="15"
            transform={`translate(-50, ${80} ) rotate(-90)`}
          >
            {type === 'cpu' ? 'CPU (cores)' : 'Memory (bytes)'}
          </text>
        </g>
      </svg>
    );
  }
}

export default TopLineChart;
