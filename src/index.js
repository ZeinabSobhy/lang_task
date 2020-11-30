import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware , compose} from 'redux';
import TargetReducer from "./Store/Reducers/TargetReducer";
import {fetchGetTarget} from "./Store/Actions/TargetActions";


// redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// custom middleware = redux-thunk
const middleware = store => {
    return next => {
        return action => {
            console.log('[MIDDLEWARE]' , action);
            const result = next(action)
            console.log('[MIDDLEWARE] next' , store.getState())
            return result ;
        };
    }
};


const store = createStore(TargetReducer ,  composeEnhancers(applyMiddleware(middleware , ReduxThunk)) )

// Fetch Data once as program running
store.dispatch(fetchGetTarget());






ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
