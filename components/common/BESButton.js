import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';


const BESButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={props.onPress}
    >
      <View >
        <Text style={styles.buttonTitleText}>
          {props.title}
        </Text>
      </View>
      <View>
        {
          props.icon ? <Icon type={props.icon.type} name={props.icon.name} size={props.icon.size || 25} color="white" /> : null
        }
      </View>

    </TouchableOpacity>
  )
};

const styles = {
  buttonStyle: {
    backgroundColor: "#09337B",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    flexDirection: 'row'
  },
  buttonTitleText: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5
  }
};

export { BESButton };
