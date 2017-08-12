import React from 'react'
import { View, TextInput, Text, Button } from 'react-native';

export default class AddHighlightForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: null};
  }

  onChangeText = text => this.setState({text: text});

  submitHighlight = () => {
    this.props.addHighlight(this.state.text);
  }

  render() {
    return (
      <View>
        <Text> Add a Highlight </Text>
        <TextInput
          placeholder="Title of your highlight"
          onChangeText={this.onChangeText}
          ref="input"
          value={this.state.text}
        />
        <Button
          onPress={this.submitHighlight}
          title="Add Highlight"
          color="#841584"
        />
      </View>
    );
  }
}
