import { connect } from 'react-redux';
import Chart from '../../components/Chart/';

const mapStateToProps = state => ({
  chart: state.chart,
  figures: state.figures,
});

const ChartContainer = connect(mapStateToProps)(Chart);

export default ChartContainer;