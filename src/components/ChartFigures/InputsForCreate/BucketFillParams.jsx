import React, { Component } from 'react';
import { Input, Label, FormGroup, Button } from 'reactstrap';
import { TwitterPicker } from 'react-color';

class BucketFillParams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
      y: '',
      color: 'FF6900',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChangePickerComplete = this.handleChangePickerComplete.bind(this);
    this.addFigure = this.addFigure.bind(this);
  }

  handleInputChange(event) {
    const input = event.target;

    this.setState({ [input.name]: +input.value });
  }

  handleChangePickerComplete (color) {
    this.setState({ color: color.hex });
  }

  addFigure() {
    this.props.addFigure({
      type: 'bucketFill',
      ...this.state
    });

    this.setState({
      x: '',
      y: '',
      color: 'FF6900',
    });
  }

  render() {
    const {
      x,
      y,
      color,
    } = this.state;
    return (
      <div className="line-params__container container">
        <div className="row">
          <div className="col-md-12">
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
              <FormGroup className="col-md-12">
                <TwitterPicker
                  color={color}
                  onChangeComplete={this.handleChangePickerComplete}
                />
              </FormGroup>
              <div className="col-md-3">
                <Button
                  onClick={this.addFigure}
                  disabled={!x || !y}
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