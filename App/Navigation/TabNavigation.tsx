import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../Utils/Colors';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import Globe from '../Screens/Globe/Globe';
import Elevate from '../Screens/Elevate/Elevate';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { hp } from '../Utils/ResponsiveHelpers';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';
            let iconSize = focused ? size + 8 : size; 

            if (route.name === 'Home') {
              iconName = 'dashboard'; 
            } else if (route.name === 'Elevate') {
              iconName = 'stars'; 
            } else if (route.name === 'Globe') {
              iconName = 'groups'; 
            } else if (route.name === 'Profile') {
              iconName = 'person'; 
            }

            return <Icon name={iconName} size={iconSize} color={color} style={styles.icon} />;
          },
          tabBarActiveTintColor: Colors.PRIMARY_LIGHT,
          tabBarInactiveTintColor: Colors.GRAY,
          tabBarStyle: [styles.tabBarStyle],
          tabBarLabelStyle: {
            fontSize: 12, 
            fontFamily: 'Lexend-Medium',
            marginTop: 4, 
          },
          headerShown: false, 
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Elevate" component={Elevate} />
        <Tab.Screen name="Globe" component={Globe} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.WHITE,
    borderTopWidth: 1,
    borderTopColor: Colors.LIGHT_GRAY,
    elevation: 5, 
    paddingVertical: hp(2), 
  },
  icon: {
    marginBottom: -4, 
  },
});

export default TabNavigation;