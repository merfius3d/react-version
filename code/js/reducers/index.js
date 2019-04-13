import {combineReducers} from 'redux';
import infoReducers from './info';
import ActivePage from './info-active'

const allReducers = combineReducers({
  info: infoReducers,
  active: ActivePage
});

export default allReducers
