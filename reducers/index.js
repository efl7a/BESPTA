import { combineReducers } from 'redux';

import EventsReducer from './events_reducer';
import PTAReducer from './pta_reducer';

export default combineReducers({
  events: EventsReducer,
  teachers: [],
  pta: PTAReducer
});
