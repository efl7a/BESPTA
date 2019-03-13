import React from 'react';
import { View, Linking } from 'react-native';
import { ListItem, Divider, Icon } from 'react-native-elements';

const AdminList = ({ data }) => {
  return data.map(item => {
    return (
      <View key={item.title}>
        <ListItem
          key={item.title}
          title={item.name}
          subtitle={item.title}
          onPress={() => Linking.openURL(`mailto:${item.email}`)}
          rightIcon={{ icon: <Icon name="email" />}}
        />
        <Divider />
      </View>
    )
  })
};

export { AdminList }
