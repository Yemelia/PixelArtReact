import { connect } from 'react-redux';
import ChartFigures from '../../components/ChartFigures/';

import { addFigure } from './../../actions';

const mapStateToProps = state => ({
  figures: state.figures,
  chart: state.chart,
});

const mapDispatchToProps = dispatch => ({
  addFigure: (params) => dispatch(addFigure(params)),
});

const ChartFiguresContainer = connect(mapStateToProps, mapDispatchToProps)(ChartFigures);

export default ChartFiguresContainer;