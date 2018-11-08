import React, { Component } from 'react';
import { Input, Label, FormGroup, Button } from 'reactstrap';

class BucketFillParams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
      y: '',
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
      type: 'bucketFill',
      ...this.state
    });
  }

  render() {
    const {
      x,
      y,
    } = this.state;
    return (
      <div className="line-params__container container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <FormGroup className="col-md-6">
                <Label for="x1">X:</Label>
                <Input
                  type="text"
                  name="x"
                  id="x"
                  value={x}
                  onChange={this.handleInputChange}
                  placeholder="x"
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label for="y1">Y:</Label>
                <Input
                  type="text"
                  name="y"
                  id="y"
                  value={y}
                  onChange={this.handleInputChange}
                  placeholder="y"
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
 
export default BucketFillParams;