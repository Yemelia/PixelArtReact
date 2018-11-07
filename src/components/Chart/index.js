import React, { Component } from 'react';

import { times } from 'lodash';

import './index.scss';

const line = {
  x1: 0,
  x2: 5,
  y1: 5,
  y2: 5,
};

const isDraw = (line, indexX, indexY) => {
  if (indexY === line.y1) {
    if (indexX >= line.x1 && indexX <= line.x2) {
      return true;
    }
  }

  return false;
};

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { chart } = this.props;
    const { x: widthX, y: widthY } = chart;

    return (
      <div className="chart__container">
        <div className="canvas">
          {times(widthY, (indexY) => (
            <div key={`${indexY}-row`} className="row">
              {times(widthX, (indexX) => {

                return <div key={`${indexX}-pixel`} className={`pixel ${isDraw(line, indexX, indexY) ? 'red' : ''}`}></div>;
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
 
export default Chart;