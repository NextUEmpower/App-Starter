import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigation from './App/Navigation/AppNavigation';
import Colors from './App/Utils/Colors';
import { Provider } from 'react-redux';
import store from './App/Store/store';
import TabNavigation from './App/Navigation/TabNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={Colors.WHITE}
          barStyle="dark-content"
        />
        <TabNavigation />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;