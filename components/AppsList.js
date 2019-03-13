import React from 'react';
import { View, Linking } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

const AppsList = ({ data, platform }) => {
  return data.map(item => {
    const URL = platform === 'ios' ? item.ios : item.android
    return (
      <View>
        <ListItem
        key={item.name}
        title={item.name}
        subtitle={item.subtitle ? item.subtitle : null}
        onPress={() => Linking.openURL(URL)}
        />
        <Divider />
      </View>
    );
  });
}

export { AppsList }
