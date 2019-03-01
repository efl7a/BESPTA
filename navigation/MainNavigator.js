import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import CalendarScreen from '../screens/CalendarScreen';
import PTAScreen from '../screens/PTAScreen';
import SchoolScreen from '../screens/SchoolScreen';
import TeacherScreen from '../screens/TeacherScreen';


export default createAppContainer(createBottomTabNavigator({
      Calendar: CalendarScreen,
      PTA: PTAScreen,
      School: {
        screen: createStackNavigator({
          School: SchoolScreen,
          Teachers: TeacherScreen
        })
      }

    }));
