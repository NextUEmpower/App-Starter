import { View, Image, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Colors from '../Utils/Colors';
import { wp } from '../Utils/ResponsiveHelpers';

const { width } = Dimensions.get('window');

// Navigation type definitions
type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function Splash() {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Signup');
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/common/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: wp(50),
    height: wp(20),
  },
});