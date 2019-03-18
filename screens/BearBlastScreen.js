import React, { Component } from 'react';
import { View, Text, Linking, ActivityIndicator } from 'react-native';


const URL = "https://ballantynepta.weebly.com/uploads/8/8/2/6/88262164/2018-2019_welcome_letter_fall.pdf"
export default class BearBlastScreen extends Component {
  componentDidMount() {
    Linking.openURL(URL)
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItem: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }
}
