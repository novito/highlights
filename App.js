import React from 'react';
import { ListView } from 'react-native';
import { Provider } from 'react-redux';
import AddHighlight from './containers/AddHighlight';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AddHighlight />
      </Provider>
    );
  }
}
