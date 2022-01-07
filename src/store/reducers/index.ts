import { combineReducers } from 'redux';

import appReducer from './appReducer';

const rootReducer = combineReducers({
  appState: appReducer,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
