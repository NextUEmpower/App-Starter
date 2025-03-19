import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity, 
  Dimensions,
  Switch,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image
} from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../Utils/Colors'
import Fonts from '../../Utils/Fonts'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
const { width, height } = Dimensions.get('window');

// Responsive size helpers
const wp = (percentage: number) => {
  return width * (percentage / 100);
};

const hp = (percentage: number) => {
  return height * (percentage / 100);
};

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  // Form validation state
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  // Validate input fields
  const validateInputs = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle login
  const handleLogin = () => {
    if (validateInputs()) {
      console.log('Login validated successfully!');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Background sections */}
      <View style={styles.topSection}>
        <LinearGradient
          colors={[Colors.PRIMARY_LIGHT, Colors.PRIMARY_DARK]}
          style={styles.gradient}
        />
      </View>
      
      <View style={styles.bottomSection}>
        <View style={styles.bottomBackground} />
      </View>
      
      <SafeAreaView style={styles.safeAreaContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image 
              source={require('../../../assets/images/common/logo.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      
        {/* Form */}
        <ScrollView contentContainerStyle={styles.formContainer}>
          <View style={styles.formBox}>
            <Text style={styles.formTitle}>Welcome</Text>
            
            <Text style={styles.formDescription}>Enter your email and password to sign in</Text>
            
            {/* Email input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email ID</Text>
              <TextInput 
                style={[styles.input, errors.email ? styles.inputError : null]}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
            </View>
            
            {/* Password input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput 
                style={[styles.input, errors.password ? styles.inputError : null]}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
              />
              {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
            </View>
            
            {/* Forget Password Button */}
            <TouchableOpacity 
              style={styles.forgetPasswordButton}
              onPress={() => navigation.navigate('ForgetPassword' as never)}
            >
              <Text style={styles.forgetPasswordText}>Forget Password?</Text>
            </TouchableOpacity>
            
            {/* Remember me */}
            <View style={styles.rememberContainer}>
              <View style={styles.rememberInnerContainer}>
                <Switch
                  trackColor={{ false: Colors.LIGHT_GRAY, true: Colors.PRIMARY_LIGHT }}
                  thumbColor={rememberMe ? Colors.PRIMARY_DARK : Colors.WHITE}
                  onValueChange={() => setRememberMe(!rememberMe)}
                  value={rememberMe}
                />
                <Text style={styles.rememberText}>Remember me</Text>
              </View>
            </View>
            
            {/* Login button */}
            <TouchableOpacity 
              style={styles.loginButton}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>Sign In</Text>
            </TouchableOpacity>
            
            {/* Sign up link */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup' as never)}>
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
  },
  topSection: {
    height: '40%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  gradient: {
    flex: 1,
  },
  bottomSection: {
    height: '60%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomBackground: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GRAY,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingTop: hp(6),
    paddingBottom: hp(1),
    zIndex: 10,
  },
  logoContainer: {
    height: hp(4),
    justifyContent: 'center',
  },
  logo: {
    height: hp(3),
    width: wp(25),
  },
  backButton: {
    borderWidth: 1,
    borderColor: Colors.SECONDARY,
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(4),
    borderRadius: wp(5),
  },
  backButtonText: {
    color: Colors.SECONDARY,
    fontFamily: Fonts.LEXEND_MEDIUM,
    fontSize: wp(3.5),
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(1),
    paddingTop: hp(12), 
  },
  formBox: {
    width: wp(85),
    backgroundColor: Colors.WHITE,
    borderRadius: wp(4),
    padding: wp(5),
    paddingVertical: wp(7), 
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formTitle: {
    fontFamily: Fonts.LEXEND_SEMIBOLD,
    fontSize: wp(6),
    color: Colors.SECONDARY,
    textAlign: 'center',
    marginBottom: hp(1),
  },
  formDescription: {
    fontFamily: Fonts.LEXEND_REGULAR,
    fontSize: wp(3.5),
    color: Colors.GRAY,
    textAlign: 'center',
    marginBottom: hp(2), 
  },
  inputContainer: {
    marginBottom: hp(1.5),
  },
  inputLabel: {
    fontFamily: Fonts.LEXEND_MEDIUM,
    fontSize: wp(3.5),
    color: Colors.BLACK,
    marginBottom: hp(0.5),
  },
  input: {
    height: hp(5.5),
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    fontFamily: Fonts.LEXEND_REGULAR,
    fontSize: wp(3.5),
  },
  inputError: {
    borderColor: Colors.ERROR,
  },
  errorText: {
    color: Colors.ERROR,
    fontFamily: Fonts.LEXEND_REGULAR,
    fontSize: wp(3),
    marginTop: hp(0.5),
  },
  forgetPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: hp(1.5),
  },
  forgetPasswordText: {
    fontFamily: Fonts.LEXEND_MEDIUM,
    fontSize: wp(3.5),
    color: Colors.SECONDARY,
  },
  rememberContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
    marginTop: hp(0.5),
  },
  rememberInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    fontFamily: Fonts.LEXEND_REGULAR,
    fontSize: wp(3.5),
    color: Colors.DARK_GRAY,
    marginLeft: wp(2),
  },
  loginButton: {
    backgroundColor: Colors.SECONDARY,
    borderRadius: wp(2),
    height: hp(5.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  loginButtonText: {
    fontFamily: Fonts.LEXEND_SEMIBOLD,
    fontSize: wp(4),
    color: Colors.WHITE,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontFamily: Fonts.LEXEND_REGULAR,
    fontSize: wp(3.5),
    color: Colors.DARK_GRAY,
  },
  signupLink: {
    fontFamily: Fonts.LEXEND_SEMIBOLD,
    fontSize: wp(3.5),
    color: Colors.SECONDARY,
  },
});