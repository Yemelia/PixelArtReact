import React, { Component } from 'react';
import { Input, Label, FormGroup, Button } from 'reactstrap';

class ChartParams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.chart.x,
      height: props.chart.y,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.setChartPrams = this.setChartPrams.bind(this);
  }

  handleInputChange(event) {
    const input = event.target;

    this.setState({ [input.name]: input.value });
  }

  setChartPrams() {
    this.props.setParams({ x: this.state.width, y: this.state.height });
  }

  render() {
    const {
      width,
      height,
    } = this.state;
    return (
      <div className="chart-params__container container">
        <div className="row">
          <FormGroup className="col-md-3">
            <Label for="width">Width:</Label>
            <Input
              type="text"
              name="width"
              id="width"
              value={width}
              onChange={this.handleInputChange}
              placeholder="table width"
            />
          </FormGroup>
          <FormGroup className="col-md-3">
            <Label for="height">Height:</Label>
            <Input
              type="text"
              name="height"
              id="height"
              value={height}
              onChange={this.handleInputChange}
              placeholder="table height"
            />
          </FormGroup>
          <Button
            onClick={this.setChartPrams}
          >
            Change
          </Button>
        </div>
      </div>
    );
  }
}
 
export default ChartParams;