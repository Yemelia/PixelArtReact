import { connect } from 'react-redux';
import ChartParams from '../../components/Chart/ChartParams.js';

import { setParams } from './../../actions';

const mapStateToProps = state => ({
  chart: state.chart,
});

const mapDispatchToProps = dispatch => ({
  setParams: ({ x, y }) => dispatch(setParams({ x, y })),
});

const ChartParamsContainer = connect(mapStateToProps, mapDispatchToProps)(ChartParams);

export default ChartParamsContainer;