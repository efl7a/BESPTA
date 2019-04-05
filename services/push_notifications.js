import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';

export default async () => {
  AsyncStorage.removeItem('BESToken')
  let previousToken = await AsyncStorage.getItem('BESPTAToken');
  if (previousToken) {
    return;
  } else {
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)

    if (status !== "granted") {
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token)
    const DB = firebase.database()
    DB.ref('tokens/').push({ token })
    AsyncStorage.setItem('BESPTAToken', token);
  }
}
