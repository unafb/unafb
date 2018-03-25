import React, { Component } from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';

class MyBudget extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3" />
        <div className="MyBudget col-md-6">
          <XYPlot
            width={600}
            height={300}
          >
            <HorizontalGridLines />
            <LineSeries
              color="red"
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
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}

export default MyBudget;
