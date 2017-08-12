import React from 'react'
import { View, TextInput, Text, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class AddHighlightForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: "", date: new Date()};
  }

  onChangeText = text => this.setState({text: text});
  onDateChange = text => this.setState({text: text});

  submitHighlight = () => {
    this.props.addHighlight({
      text: this.state.text,
      date: this.state.date
    });
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
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          format="YYYY-MM-DD"
          minDate="2015-05-01"
          maxDate="2020-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={this.onDateChange}
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
