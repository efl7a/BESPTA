import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const BESButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={props.onPress}
    >
      <Text style={styles.buttonTitleText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
};

const styles = {
  buttonStyle: {
    backgroundColor: "#1b2668",
    padding: 10,
  },
  buttonTitleText: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export { BESButton };
