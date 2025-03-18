import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../Utils/Colors';
import Fonts from '../Utils/Fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');

// Responsive size helpers
const wp = (percentage: number) => {
  return width * (percentage / 100);
};

const hp = (percentage: number) => {
  return height * (percentage / 100);
};

// Navigation type definitions
type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function Welcome() {
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <LinearGradient
      colors={[Colors.PRIMARY_LIGHT, Colors.PRIMARY_DARK]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Header section */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image 
              source={require('../../assets/images/common/logo.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.notificationContainer}>
              <Icon name="notifications-outline" size={wp(5)} color={Colors.WHITE} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image 
                source={require('../../assets/images/common/user.jpg')} 
                style={styles.userImage} 
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Content section */}
        <View style={styles.content}>
          <View style={styles.contentLeft}>
            <Text style={styles.title}>We help you{'\n'}to find your Career</Text>
            
            <Text style={styles.description}>
              Enthusiastically extend extensive customer service before best-of-breed convergence completely.
            </Text>

            <TouchableOpacity 
              style={styles.registerButton}
              onPress={() => navigation.navigate('Signup')}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>

          {/* Image section */}
          <View style={styles.imageContainer}>
            <Image 
              source={require('../../assets/images//welcome/image.png')} 
              style={styles.welcomeImage}
              resizeMode="contain"
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingTop: hp(4),
    paddingBottom: hp(2),
  },
  logoContainer: {
    height: hp(5),
    justifyContent: 'center',
  },
  logo: {
    height: hp(4),
    width: wp(30),
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationContainer: {
    backgroundColor: Colors.SECONDARY,
    borderRadius: wp(5),
    padding: wp(2),
    marginRight: wp(3),
  },
  userImage: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(5),
    borderWidth: 0.2,
    borderColor: Colors.WHITE,
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(6),
    paddingTop: hp(3),
  },
  contentLeft: {
    width: width*0.95,
    alignSelf: 'flex-start',
  },
  title: {
    color: Colors.WHITE,
    fontSize: wp(8),
    fontFamily: Fonts.LEXEND_EXTRABOLD,
    marginBottom: hp(2.5),
    lineHeight: hp(5),
    width: '80%',
  },
  description: {
    color: Colors.WHITE,
    fontSize: wp(3),
    fontFamily: Fonts.LEXEND_REGULAR,
    marginBottom: hp(3.5),
    opacity: 0.8,
    lineHeight: hp(3),
    width: '80%',
  },
  registerButton: {
    backgroundColor: Colors.SECONDARY,
    borderRadius: wp(2.5),
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(4),
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: hp(3),
  },
  buttonText: {
    color: Colors.WHITE,
    fontFamily: Fonts.LEXEND_SEMIBOLD,
    fontSize: wp(4),
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  welcomeImage: {
    width: wp(150),
    height: hp(45),
  },
});