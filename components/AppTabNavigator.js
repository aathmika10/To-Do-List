import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ScheduleScreen from '../screens/ScheduleScreen';
import CalenderScreen from '../screens/CalenderScreen';

export const AppTabNavigator =createBottomTabNavigator({
  Calender:{
    screen:CalenderScreen,
    navigationOptions:{
      tabBarIcon:<Image source ={require("../assets/calender.png")} style={{width:25,height:25}}/>,
      tabBarLabel:"CALENDER",
    }
  },
    Schedule:{
    screen:ScheduleScreen,
    navigationOptions:{
      tabBarIcon:<Image source ={require("../assets/ToDoList.png")} style={{width:25,height:25}}/>,
      tabBarLabel:"SCHEDULE",
    }
  }
})
