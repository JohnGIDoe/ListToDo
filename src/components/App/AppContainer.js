import {connect} from 'react-redux';
import App from './App';
import { createActionMoveCard } from '../../redux/cardsRedux';

const mapDispatchToProps = dispatch => ({
  moveCard: payload => dispatch(createActionMoveCard(payload)),
});

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);