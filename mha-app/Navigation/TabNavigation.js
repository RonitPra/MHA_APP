import 'react-native-gesture-handler';
import * as React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BlogScreen from '../screens/Blog';
import VideoScreen from '../screens/Video';
import QuotesScreen from '../screens/Quotes';
import WebsiteScreen from '../screens/Website';

const Tab = createBottomTabNavigator();

export default class MyTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Blogs"
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          headerShown: false,
        }}>
        <Tab.Screen
          name="Blogs"
          component={BlogScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="pen" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Videos"
          component={VideoScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="video" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Quotes"
          component={QuotesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Websites"
          component={WebsiteScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="apple-keyboard-shift"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
