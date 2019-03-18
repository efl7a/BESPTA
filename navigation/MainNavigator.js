import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import CalendarScreen from '../screens/CalendarScreen';
import PTAScreen from '../screens/PTAScreen';
import SchoolScreen from '../screens/SchoolScreen';
import TeacherScreen from '../screens/TeacherScreen';
import VolunteerScreen from '../screens/VolunteerScreen';
import CalendarInfoScreen from '../screens/CalendarInfoScreen';
import BearBlastScreen from '../screens/BearBlastScreen';


export default createAppContainer(createBottomTabNavigator({
      Calendar: {
        screen: createStackNavigator({
          Calendar: {
            screen: CalendarScreen,
            navigationOptions: {
              headerTintColor: '#09337B'
            }
          },
          MoreInfo: {
            screen: CalendarInfoScreen,
            navigationOptions: {
              headerTintColor: '#09337B'
            }
          }
        }),
        navigationOptions: {
          tabBarIcon: ({tintColor}) => {
            return <Icon
              type="font-awesome"
              name="calendar"
              size={30}
              color={tintColor}
            />
          },
          tabBarOptions: {
            activeTintColor: '#09337B'
          }
        }
      },
      BearBlast: {
        screen: BearBlastScreen,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => {
            return <Icon
              type="entypo"
              name="news"
              size={30}
              color={tintColor}
            />
          },
          tabBarOptions: {
            activeTintColor: '#09337B'
          }
        }
      },
      PTA: {
        screen: createStackNavigator({
          PTA: PTAScreen,
          Volunteer: {
            screen: VolunteerScreen,
            navigationOptions: {
              headerTintColor: '#09337B'
            }
          }
        }),
        navigationOptions: {
          tabBarIcon: ({tintColor}) => {
            return <Icon
              type="entypo"
              name="baidu"
              size={30}
              color={tintColor}
            />
          },
          tabBarOptions: {
            activeTintColor: '#09337B'
          }
        }
      },
      School: {
        screen: createStackNavigator({
          School: SchoolScreen,
          Teachers: {
            screen: TeacherScreen,
            navigationOptions: {
              headerTintColor: '#09337B'
            }
          }
        }),
        navigationOptions: {
          tabBarIcon: ({tintColor}) => {
            return <Icon
              type="entypo"
              name="graduation-cap"
              size={30}
              color={tintColor}
            />
          },
          tabBarOptions: {
            activeTintColor: '#09337B'
          }
        }
      }

    }));
