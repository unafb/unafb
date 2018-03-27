import React, { Component } from 'react';
import { SplitButton, MenuItem, ButtonToolbar } from 'react-bootstrap';
import Chart from '../Chart';

const BUTTONS = ['Chart Type'];

function renderDropdownButton(title, i) {
  return (
    <SplitButton
      bsStyle={title.toLowerCase()}
      title={title}
      key={i}
      id={`split-button-basic-${i}`}
      onClick={()=> this.chart = 'XY' }
    >
      <MenuItem eventKey="1">XY</MenuItem>
      <MenuItem eventKey="2">Radial</MenuItem>
    </SplitButton>
  );
}
const buttonsInstance = (
  <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
);

class MyBudget extends Component {
  constructor(props) {
    super(props);
    this.chart = '';
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-3" />
        <div className="MyBudget col-md-6">
          <Chart type={buttonsInstance.key} />
          {buttonsInstance}
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}

export default MyBudget;
