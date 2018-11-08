import React, { Component } from 'react';

import { paintMatrix } from '../../helpers/paintMatrix';

import './index.scss';

function createArray(x, y) {
  return new Array(y).fill(0).map(() => new Array(x).fill(0));
}

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { chart, figures } = this.props;
    const { x: widthX, y: widthY } = chart;
    let matrix = createArray(widthX + 1, widthY + 1);
    figures.forEach(figure => {
      paintMatrix(figure, matrix);
    });
    return (
      <div className="chart__container mt-4">
        <div className="canvas">
          {matrix.map((row, indexY) => {
            if (indexY === 0) return;
            return (
              <div className="row">
                {row.map((pixel, indexX) => {
                  if (indexX === 0) return;
                  return <div className={`pixel ${pixel ? pixel === 1 ? 'red' : 'orange' : ''}`}></div>;
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