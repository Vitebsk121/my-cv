import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import compose from 'redux-typescript/lib/utils/compose';

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  ),
);

export default store;
