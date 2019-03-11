import { FETCH_PTA } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PTA:
      return action.payload;
    default:
      return state;
  }
}
