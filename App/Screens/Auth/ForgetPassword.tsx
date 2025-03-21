import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../Utils/Colors';
import Fonts from '../../Utils/Fonts';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import CustomHeader from '../../Components/Common/CustomHeader';
import StepOne from '../../Components/Auth/StepOne';
import StepTwo from '../../Components/Auth/StepTwo';
import StepThree from '../../Components/Auth/StepThree';
import { wp, hp } from '../../Utils/ResponsiveHelpers';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from '../../Store/userSlice';
import { RootState } from '../../Store/store';

export default function ForgetPassword() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { email } = useSelector((state: RootState) => state.user);
  const [step, setStep] = useState(1); 
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', otp: '', password: '', confirmPassword: '' });
  const otpRefs = Array.from({ length: 6 }, () => React.createRef<TextInput>());

  const handleOtpChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otpRefs.length - 1) {
      otpRefs[index + 1].current?.focus();
    }
  };

  const validateStepOne = () => {
    if (!email.trim()) {
      setErrors({ ...errors, email: 'Email is required' });
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ ...errors, email: 'Please enter a valid email' });
      return false;
    }
    return true;
  };

  const validateStepThree = () => {
    let isValid = true;
    const newErrors = { ...errors, password: '', confirmPassword: '' };

    if (!newPassword) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (newPassword.length < 8 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(newPassword)) {
      newErrors.password = 'Password must include uppercase, lowercase, number, and symbol';
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
      isValid = false;
    } else if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const renderStepContent = () => {
    if (step === 1) {
      return (
        <StepOne
          email={email}
          setEmail={(value) => dispatch(setEmail(value))}
          onNext={() => validateStepOne() && setStep(2)}
        />
      );
    } else if (step === 2) {
      return (
        <StepTwo
          otp={otp}
          otpRefs={otpRefs}
          handleOtpChange={handleOtpChange}
          onNext={() => setStep(3)}
        />
      );
    } else if (step === 3) {
      return (
        <StepThree
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          setNewPassword={setNewPassword}
          setConfirmPassword={setConfirmPassword}
          onSave={() => validateStepThree() && console.log('Password reset successfully!')}
        />
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
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
        <CustomHeader onBackPress={() => navigation.goBack()} isBackBtnVisible={true} />
      
        <ScrollView contentContainerStyle={styles.formContainer}>
          <View style={styles.formBox}>
            <Text style={styles.formTitle}>Forgot Password?</Text>
            {renderStepContent()}
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
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
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(1),
    paddingTop: hp(12), 
  },
  formBox: {
    width: wp(85),
    height:hp(50),
    backgroundColor: Colors.WHITE,
    borderRadius: wp(4),
    padding: wp(5),
    paddingTop: hp(4), 
    paddingBottom: hp(4),
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formTitle: {
    fontFamily: Fonts.LEXEND_BOLD,
    fontSize: wp(6),
    color: Colors.PRIMARY_DARK,
    textAlign: 'center',
    marginBottom: hp(2),
  },
});