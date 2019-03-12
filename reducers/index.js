import { combineReducers } from 'redux';

import EventsReducer from './events_reducer';
import PTAReducer from './pta_reducer';
import SchoolReducer from './school_reducer';
import TeachersReducer from './teachers_reducer';

export default combineReducers({
  events: EventsReducer,
  teachers: TeachersReducer,
  pta: PTAReducer,
  school: SchoolReducer
});
