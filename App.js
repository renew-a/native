import React from 'react'
//import { Provider } from 'react-native-paper'
import { Provider, useSelector } from 'react-redux'
import { createStore } from 'redux'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()

function HomeScreen() {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}
    >
      <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
      <View style={{ backgroundColor: 'red', flex: 0.5 }} />
      <Text>Hello World!</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        color: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Settings!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen name="loginScreen" component={SettingsScreen} />
        <Stack.Screen name="main" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
