import React from 'react';

import Chart from '../../containers/Chart/ChartContainer';
import ChartParams from '../../containers/Chart/ChartParamsContainer';
import ChartFigures from '../../containers/ChartFigures/ChartFiguresContainer';

const Body = () => {
  return (
    <div>
      <div className="container">
        <ChartParams />
        <div className="row">
          <div className="col-md-4">
            <ChartFigures />
          </div>
          <div className="col-md-8">
            <Chart />
          </div>
        </div>
      </div>
    </div> 
  );
};
 
export default Body;