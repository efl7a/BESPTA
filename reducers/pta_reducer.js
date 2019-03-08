import { FETCH_PTA } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PTA:
    console.log(`fetch pta ${action.payload}`)
      return action.payload;
    default:
      return state;
  }
}
