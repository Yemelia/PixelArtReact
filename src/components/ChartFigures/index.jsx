import React, { Component } from 'react';
import { Input } from 'reactstrap';

import ByTwoParams from './InputsForCreate/ByTwoParams';
import ByOneParams from './InputsForCreate/ByOneParams';

class ChartFigures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      figureType: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const input = event.target;
    this.setState({ [input.name]: input.value });
  }

  render() {
    const {
      figureType,
    } = this.state;

    return (
      <div className="chart-figures__container">
        <p>Add Figure:</p>
        <div className="row mb-2">
          <div className="col-md-12">
            <Input
              type="select"
              onChange={this.handleInputChange}
              name="figureType"
            > 
              <option />
              <option value="rectangle">Rectangle</option>
              <option value="line">Line</option>
              <option value="bucketFill">Bucket Fill</option>
            </Input>
          </div>
        </div>
        {figureType === 'line' &&
          <ByTwoParams
            addFigure={this.props.addFigure}
            type={figureType}
          />
        }
        {figureType === 'rectangle' &&
          <ByTwoParams
            addFigure={this.props.addFigure}
            type={figureType}
          />
        }
        {figureType === 'bucketFill' &&
          <ByOneParams
            addFigure={this.props.addFigure}
            type={figureType}
          />
        }
      </div>
    );
  }
}
 
export default ChartFigures;

