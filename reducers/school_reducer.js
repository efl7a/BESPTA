import { FETCH_SCHOOL } from '../actions/types';

export default (state=[], action) => {
  switch(action.type) {
    case FETCH_SCHOOL:
      return action.payload;
    default:
      return state;
  }
}
