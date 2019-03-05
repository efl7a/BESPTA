import { createStore, compose, applyMiddleWare } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from '../reducers';

export default createStore(
  reducers,
  {},
  compose(applyMiddleware(ReduxThunk))
);
