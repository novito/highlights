import React from 'react';
import { ListView, View } from 'react-native';
import { Provider } from 'react-redux';
import AddHighlight from './containers/AddHighlight';
import Highlights from './containers/Highlights';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <AddHighlight />
          <Highlights />
        </View>
      </Provider>
    );
  }
}
