import React from 'react';
import { ListView } from 'react-native';
import * as firebase from 'firebase';
const HighlightItem = require('./components/HighlightItem');
const styles = require('./styles.js');
const config = require('./config.json');

// Initialize Firebase
const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DATABASE_URL,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{ title: "test"}, { title: "test" }]),
    };
    this.highlightsRef = firebaseApp.database().ref();
  }

  componentDidMount() {
    this.listenForHighlights(this.highlightsRef.child("highlights"));
  }

  // TODO: We are allowing anyone (publicly) to read/write to DB. Fix auth
  listenForHighlights(highlightsRef) {
    highlightsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
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
