import React, { Component } from 'react';
import { Input } from 'reactstrap';

import LineParams from './LineParams';
import RectangleParams from './RectangleParams';

class ChartFigures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      figure: 'rectangle',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const input = event.target;
    this.setState({ [input.name]: input.value });
  }

  render() {
    const {
      figure,
    } = this.state;
    console.log(this.props);
    return (
      <div className="chart-figures__container">
        <div className="row">
          <div className="col-md-4">
            <Input
              type="select"
              onChange={this.handleInputChange}
              name="figure"
            > 
              <option />
              <option value="rectangle">Rectangle</option>
              <option value="line">Line</option>
            </Input>
          </div>
        </div>
        {figure === 'line' &&
          <LineParams
            addFigure={this.props.addFigure}
          />
        }
        {figure === 'rectangle' &&
          <RectangleParams
            addFigure={this.props.addFigure}
          />
        }
      </div>
    );
  }
}
 
export default ChartFigures;

