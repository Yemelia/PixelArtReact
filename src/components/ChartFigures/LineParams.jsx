import React, { Component } from 'react';
import { Input, Label, FormGroup, Button } from 'reactstrap';

class LineParams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x1: '',
      x2: '',
      y1: '',
      y2: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addFigure = this.addFigure.bind(this);
  }

  handleInputChange(event) {
    const input = event.target;

    this.setState({ [input.name]: +input.value });
  }

  addFigure() {
    this.props.addFigure({
      type: 'line',
      ...this.state
    });
  }

  render() {
    const {
      x1,
      x2,
      y1,
      y2,
    } = this.state;
    return (
      <div className="line-params__container container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <FormGroup className="col-md-6">
                <Label for="x1">X1:</Label>
                <Input
                  type="text"
                  name="x1"
                  id="x1"
                  value={x1}
                  onChange={this.handleInputChange}
                  placeholder="x1"
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label for="x2">X2:</Label>
                <Input
                  type="text"
                  name="x2"
                  id="x2"
                  value={x2}
                  onChange={this.handleInputChange}
                  placeholder="x2"
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label for="y1">Y1:</Label>
                <Input
                  type="text"
                  name="y1"
                  id="y1"
                  value={y1}
                  onChange={this.handleInputChange}
                  placeholder="y1"
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label for="y2">Y2:</Label>
                <Input
                  type="text"
                  name="y2"
                  id="y2"
                  value={y2}
                  onChange={this.handleInputChange}
                  placeholder="x2"
                />
              </FormGroup>
              <div className="col-md-3">
                <Button
                  onClick={this.addFigure}
                >
                  Add Figure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default LineParams;