import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigation from './App/Navigation/AppNavigation';
import Colors from './App/Utils/Colors';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={Colors.WHITE}
        barStyle="dark-content"
      />
      <AppNavigation />
    </GestureHandlerRootView>
  );
};

export default App;