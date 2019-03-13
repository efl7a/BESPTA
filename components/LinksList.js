import React from 'react';
import { View, Linking } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

const LinksList = ({ data }) => {
  return (
    data.map(item => {
      return (
        <View key={item.name}>
          <ListItem
          key={item.name}
          title={item.name}
          subtitle={item.subtitle ? item.subtitle : null}
          onPress={() => Linking.openURL(item.link)}
          />
          <Divider />
        </View>
      )
    })
  );
};

export { LinksList }
