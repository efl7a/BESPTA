import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class SchoolScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'School Information',
      headerRight: (
        <Button
          title="Teachers"
          onPress={() => navigation.navigate('Teachers')}
          type="clear"
        />
      )
    }
  }
  render() {
    return(
      <View>
        <Text>
          SchoolScreen
        </Text>
        <Text>
          SchoolScreen
        </Text>
        <Text>
          SchoolScreen
        </Text>
        <Text>
          SchoolScreen
        </Text>
        <Text>
          SchoolScreen
        </Text>
        <Text>
          SchoolScreen
        </Text>
      </View>
    )
  }
}

export default SchoolScreen;
