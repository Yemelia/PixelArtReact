import React from 'react';

import Chart from '../../containers/Chart/';
import ChartParams from '../../containers/Chart/ChartParams.js';
import ChartFigures from '../../containers/ChartFigures/';

const Body = () => {
  return (
    <div>
      <div className="container">
        <ChartParams />
        <ChartFigures />
        <Chart />
      </div>
    </div> 
  );
};
 
export default Body;