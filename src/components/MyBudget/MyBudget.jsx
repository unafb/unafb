import React, { Component } from 'react';
import { SplitButton, MenuItem, ButtonToolbar } from 'react-bootstrap';
import Chart from '../Chart';

class MyBudget extends Component {
  constructor() {
    super();
    this.state = {
      buttons: ['Chart Type'],
      chart: '',
    };
    this.renderDropdownButton = this.renderDropdownButton.bind(this);
  }
  renderDropdownButton(title, i) {
    return (
      <SplitButton
        bsStyle={title.toLowerCase()}
        title={title}
        key={i}
        id={`split-button-basic-${i}`}
        onClick={() => this.setState({ chart: 'XY' })}
      >
        <MenuItem onSelect={() => this.setState({ chart: 'XY' })} eventKey="1">XY</MenuItem>
        <MenuItem onSelect={() => this.setState({ chart: 'Radial' })} onseventKey="2">Radial</MenuItem>
      </SplitButton>
    );
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-3" />
        <div className="MyBudget col-md-6">
          <ButtonToolbar>{this.state.buttons.map(this.renderDropdownButton)}</ButtonToolbar>
          <Chart type={this.state.chart} />
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}

export default MyBudget;
