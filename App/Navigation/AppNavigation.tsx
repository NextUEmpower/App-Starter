import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/Auth/Login';
import Signup from '../Screens/Auth/Signup';
import Splash from '../Screens/Splash';
import ForgetPassword from '../Screens/Auth/ForgetPassword';

// Navigation param list types
type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Splash: undefined;
  ForgetPassword: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
