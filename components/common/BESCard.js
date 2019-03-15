import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';


const BESCard = (props) => {
  return (
    <Card
      title={
        <View style={styles.cardTitleView}>
          <Text style={styles.cardTitleText}>{props.title}</Text>
        </View>
      }
    >
      {props.children}
    </Card>
  )
};

const styles = {
  cardTitleView: {
    backgroundColor: "#1b2668",
    padding: 10,
  },
  cardTitleText: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export { BESCard };
