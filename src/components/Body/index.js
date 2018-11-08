import React from 'react';

import Chart from '../../containers/Chart/ChartContainer';
import ChartParams from '../../containers/Chart/ChartParamsContainer';
import ChartFigures from '../../containers/ChartFigures/ChartFiguresContainer';

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