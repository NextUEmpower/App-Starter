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
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import CustomHeader from '../../Components/Common/CustomHeader'
import { wp, hp } from '../../Utils/ResponsiveHelpers'
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, setName } from '../../Store/userSlice';
import { RootState } from '../../Store/store';

const { width, height } = Dimensions.get('window');

export default function Signup() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { email, password, name } = useSelector((state: RootState) => state.user);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const validateInputs = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', password: '' };

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (!/^[A-Z][a-z]*$/.test(name)) {
      newErrors.name = 'Name must start with an uppercase letter';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 8 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password)) {
      newErrors.password = 'Password must include uppercase, lowercase, number, and symbol';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = () => {
    if (validateInputs()) {
      console.log('Signup validated successfully!');
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
        <CustomHeader onBackPress={() => navigation.goBack()} isBackBtnVisible={false} />
      
        {/* Form */}
        <ScrollView contentContainerStyle={styles.formContainer}>
          <View style={styles.formBox}>
            <Text style={styles.formTitle}>Register</Text>
            
            {/* Social login */}
            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <Icon name="facebook" size={wp(6)} color="#3b5998" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Icon name="apple" size={wp(6)} color="#000000" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Icon name="google" size={wp(6)} color="#db4a39" />
              </TouchableOpacity>
            </View>
            
            <Text style={styles.orText}>OR</Text>
            
            {/* Name input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput 
                style={[styles.input, errors.name ? styles.inputError : null]}
                value={name}
                onChangeText={(value) => dispatch(setName(value))}
                placeholder="Enter your name"
              />
              {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
            </View>
            
            {/* Email input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email ID</Text>
              <TextInput 
                style={[styles.input, errors.email ? styles.inputError : null]}
                value={email}
                onChangeText={(value) => dispatch(setEmail(value))}
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
                onChangeText={(value) => dispatch(setPassword(value))}
                placeholder="Enter your password"
                secureTextEntry
              />
              {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
            </View>
            
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
            
            {/* Signup button */}
            <TouchableOpacity 
              style={styles.signupButton}
              onPress={handleSignup}
            >
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>
            
            {/* Login link */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
                <Text style={styles.loginLink}>Sign in</Text>
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
    paddingTop: hp(4), 
  },
  formBox: {
    width: wp(85), 
    backgroundColor: Colors.WHITE,
    borderRadius: wp(4), 
    padding: wp(5), 
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
    fontFamily: Fonts.LEXEND_BOLD,
    fontSize: wp(6), 
    color: Colors.PRIMARY_DARK,
    textAlign: 'center',
    marginBottom: hp(2), 
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: hp(2), 
  },
  socialButton: {
    width: wp(12), 
    height: wp(12), 
    borderRadius: wp(2), 
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.GRAY,
  },
  orText: {
    fontFamily: Fonts.LEXEND_MEDIUM,
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
  signupButton: {
    backgroundColor: Colors.SECONDARY,
    borderRadius: wp(2), 
    height: hp(5.5), 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2), 
  },
  signupButtonText: {
    fontFamily: Fonts.LEXEND_SEMIBOLD,
    fontSize: wp(4), 
    color: Colors.WHITE,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontFamily: Fonts.LEXEND_REGULAR,
    fontSize: wp(3.5), 
    color: Colors.DARK_GRAY,
  },
  loginLink: {
    fontFamily: Fonts.LEXEND_SEMIBOLD,
    fontSize: wp(3.5), 
    color: Colors.SECONDARY,
  },
});