import React from 'react'
//import { Provider } from 'react-native-paper'
import { Provider, useSelector } from 'react-redux'
import { createStore } from 'redux'
import userReducer from './src/reducers/user'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { BottomNavigation } from 'react-native-paper'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  StartScreen,
  LoginScreen,
  UsersScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  GroupScreen,
  InviteScreen,
  CreateGroup,
} from './src/screens'

const Stack = createStackNavigator()
const store = createStore(userReducer)
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

/*
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useColorScheme } from "./hooks/useColorScheme";
import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import userReducer from "./reducers/user";

const store = createStore(userReducer);
export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}



import React from 'react'
//import { Provider } from 'react-native-paper'
import { Provider, useSelector } from 'react-redux'
import { createStore } from 'redux'
import userReducer from './src/reducers/user'
import { NavigationContainer } from '@react-navigation/native'
import { BottomNavigation, Text } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack'
import { createAppContainer,createSwitchNavigator } from '@react-navigation/stack';

import { theme } from './src/core/theme'

import {
  StartScreen,
  LoginScreen,
  UsersScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  GroupScreen,
  InviteScreen,
  CreateGroup,
} from './src/screens'

const Stack = createStackNavigator()

const GuestNavigator = createStackNavigator({
    StartScreen,
})

const createRootNavigator = (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignedIn: {
          screen: TabNavigator,
        },
        SignedOut: {
          screen: GuestNavigator,
        },
      },
      {
        initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
      },
    ))

const store = createStore(userReducer)
export default function App() {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'queue-music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ])

  const uno = () => {
    const cartItems = useSelector((state) => state)
    console.log('cartItems', cartItems)
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="UsersScreen" component={UsersScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  const dos = () => (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="GroupScreen" component={GroupScreen} />
        <Stack.Screen name="InviteScreen" component={InviteScreen} />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

  const tres = () => (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="CreateGroup" component={CreateGroup} />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

  const renderScene = BottomNavigation.SceneMap({
    music: uno,
    albums: dos,
    recents: tres,
  })

  return (
    <Provider store={store} theme={theme}>
      {store.getState().isLogged ? (
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </Provider>
  )
}













import React from 'react'
//import { Provider } from 'react-native-paper'
import { Provider, useSelector } from 'react-redux'
import { createStore } from 'redux'
import userReducer from './src/reducers/user'
import { NavigationContainer } from '@react-navigation/native'
import { BottomNavigation, Text } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'

import {
  StartScreen,
  LoginScreen,
  UsersScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  GroupScreen,
  InviteScreen,
  CreateGroup,
} from './src/screens'

const Stack = createStackNavigator()
const store = createStore(userReducer)
export default function App() {

  return (
    <Provider store={store} theme={theme}>
      <NavigationContainer >
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="UsersScreen" component={UsersScreen} />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          />
          <Stack.Screen name="CreateGroup" component={CreateGroup} />
          <Stack.Screen name="GroupScreen" component={GroupScreen} />
        <Stack.Screen name="InviteScreen" component={InviteScreen} />
      </Stack.Navigator>
    </NavigationContainer >
    </Provider>
  )
}

*/
