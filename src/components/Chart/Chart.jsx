import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, RadialChart } from 'react-vis';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.renderXY = this.renderXY.bind(this);
    this.renderRadial = this.renderRadial.bind(this);
  }
  renderXY() {
    return (
      <XYPlot
        width={600}
        height={300}
      >
        <HorizontalGridLines />
        <LineSeries
          color={this.props.color}
          data={[
          { x: 1, y: 10 },
          { x: 2, y: 5 },
          { x: 3, y: 11 },
          { x: 4, y: 21 },
          { x: 5, y: 29 },
          { x: 6, y: 2 },
          { x: 7, y: 17 },
          { x: 8, y: 35 },
          { x: 9, y: 12 },
          { x: 10, y: 11 },
          { x: 11, y: 56 },
          { x: 12, y: 67 },
          ]}
        />
        <XAxis />
        <YAxis />
      </XYPlot>
    );
  }
  renderRadial() {
    return (
      <RadialChart
        data={[{ angle: 1 }, { angle: 5 }, { angle: 2 }]}
        width={300}
        height={300}
      />
    );
  }
  render() {
    return this.props.type === 'XY' ? this.renderXY() : this.renderRadial();
  }
}
Chart.defaultProps = {
  type: 'XY',
  color: 'Red',
};
Chart.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
};

export default Chart;
