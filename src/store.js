import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
