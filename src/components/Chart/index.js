import React, { Component } from 'react';
import { times } from 'lodash';

import { isDrawPixel } from '../../helpers';

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
      <div className="chart__container mt-4">
        <div className="canvas">
          {times(widthY + 1, (indexY) => {
            if (indexY === 0) return;
            return (
              <div key={`${indexY}-row`} className="row">
                {times(widthX + 1, (indexX) => {
                  if (indexX === 0) return;
                  return <div key={`${indexY}-${indexX}-pixel`} className={`pixel ${isDrawPixel(figures, indexX, indexY) ? 'drawed-pixel' : ''}`}></div>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
 
export default Chart;