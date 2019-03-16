import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import CalendarScreen from '../screens/CalendarScreen';
import PTAScreen from '../screens/PTAScreen';
import SchoolScreen from '../screens/SchoolScreen';
import TeacherScreen from '../screens/TeacherScreen';
import VolunteerScreen from '../screens/VolunteerScreen';


export default createAppContainer(createBottomTabNavigator({
      Calendar: CalendarScreen,
      PTA: {
        screen: createStackNavigator({
          PTA: PTAScreen,
          Volunteer: VolunteerScreen
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
          Teachers: TeacherScreen
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
