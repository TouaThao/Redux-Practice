import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore,  combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const elementList = (state = [], action) => {
  if(action.type === 'ADD_ELEMENT') {
    return [...state, action.payload]
  } else if(action.type === 'CLEAR_ELEMENTS') {
    return [];
  }
  return state
}

//This creates our Store Object
//Can only take in one reducer!
const storeInstance = createStore(
  //This is a reducer. Hang tight!
  combineReducers({
    elementList,
  }),
  applyMiddleware(logger)

)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
