import React, { Component } from 'react';
import { Input, FormGroup, Button } from 'reactstrap';

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
    this.props.setParams({ x: +this.state.width, y: +this.state.height });
  }

  render() {
    const {
      width,
      height,
    } = this.state;
    return (
      <div className="chart-params__container mt-2">
        <p>Chart Canvas Params:</p>
        <div className="row">
          <FormGroup className="col-md-4">
            <Input
              type="text"
              name="width"
              id="width"
              value={width}
              onChange={this.handleInputChange}
              placeholder="Width"
            />
          </FormGroup>
          <FormGroup className="col-md-4">
            <Input
              type="text"
              name="height"
              id="height"
              value={height}
              onChange={this.handleInputChange}
              placeholder="Height"
            />
          </FormGroup>
          <div className="col-md-4">
            <Button
              onClick={this.setChartPrams}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
 
export default ChartParams;