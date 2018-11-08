import React from 'react';

import Chart from '../../containers/Chart/ChartContainer';
import ChartParams from '../../containers/Chart/ChartParamsContainer';
import ChartFigures from '../../containers/ChartFigures/ChartFiguresContainer';

const Body = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <ChartParams />
            </div>
            <div className="col-md-12">
              <ChartFigures />
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <Chart />
        </div>
      </div>
    </div>
  );
};
 
export default Body;