import React from 'react';
import { ListView } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './src/reducers/index';
import { Provider } from 'react-redux';
import AddHighlight from './containers/AddHighlight';

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

const styles = require('./styles.js');

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AddHighlight />
      </Provider>
    );
  }
}
