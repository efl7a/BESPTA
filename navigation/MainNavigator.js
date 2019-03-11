import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

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
        })
      },
      School: {
        screen: createStackNavigator({
          School: SchoolScreen,
          Teachers: TeacherScreen
        })
      }

    }));
