import React, { Component } from 'react';
import { times } from 'lodash';

import { isDraw } from '../../helpers';

import './index.scss';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { chart, figures } = this.props;
    const { x: widthX, y: widthY } = chart;

    return (
      <div className="chart__container">
        <div className="canvas">
          {times(widthY, (indexY) => (
            <div key={`${indexY}-row`} className="row">
              {times(widthX, (indexX) => {
                return <div key={`${indexY}-${indexX}-pixel`} className={`pixel ${isDraw(figures, indexX, indexY) ? 'red' : ''}`}></div>;
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
 
export default Chart;