import React from 'react';
import { ListView } from 'react-native';
import * as firebase from 'firebase';
import Config from 'react-native-config'
const HighlightItem = require('./components/HighlightItem');
const styles = require('./styles.js')

// Initialize Firebase
const firebaseConfig = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.FIREBASE_AUTH_DOMAIN,
  databaseURL: Config.FIREBASE_DATABASE_URL,
  projectId: Config.FIREBASE_STORAGE_BUCKET,
  storageBucket: Config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{ title: "First tooth" }]),
    };
  }

  _renderHighlightItem(item) {
    return (
      <HighlightItem item={item}/>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderHighlightItem.bind(this)}
      />
    );
  }
}
