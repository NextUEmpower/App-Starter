import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Dimensions, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from 'react-native';
import React, { useState } from 'react';
import Colors from '../../Utils/Colors';
import Fonts from '../../Utils/Fonts';

const { width, height } = Dimensions.get('window');

// Responsive size helpers
const wp = (percentage: number) => {
  return width * (percentage / 100);
};

const hp = (percentage: number) => {
  return height * (percentage / 100);
};

export default function ForgetPassword() {
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP, Step 3: New Password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOtpChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

  const renderStepContent = () => {
    if (step === 1) {
      // Step 1: Enter Email
      return (
        <>
          <Text style={styles.description}>
            Enter your email address and we’ll send you a confirmation code to reset your password.
          </Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput 
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => setStep(2)}
          >
            <Text style={styles.buttonText}>Send Confirmation Code</Text>
          </TouchableOpacity>
        </>
      );
    } else if (step === 2) {
      // Step 2: Enter OTP
      return (
        <>
          <Text style={styles.description}>
            Enter the 6-digit confirmation code sent to your email.
          </Text>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput 
                key={index}
                style={styles.otpInput}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                maxLength={1}
                keyboardType="numeric"
              />
            ))}
          </View>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => setStep(3)}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </>
      );
    } else if (step === 3) {
      // Step 3: Enter New Password
      return (
        <>
          <Text style={styles.description}>
            Enter your new password and confirm it to reset your password.
          </Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>New Password</Text>
            <TextInput 
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Enter new password"
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput 
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm new password"
              secureTextEntry
            />
          </View>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => console.log('Password reset successfully!')}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </>
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Forgot Password?</Text>
        {renderStepContent()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(6),
    paddingVertical: hp(4),
  },
  title: {
    fontFamily: Fonts.LEXEND_BOLD,
    fontSize: wp(6),
    color: Colors.PRIMARY_DARK,
    marginBottom: hp(2),
    textAlign: 'center',
  },
  description: {
    fontFamily: Fonts.LEXEND_REGULAR,
    fontSize: wp(3.5),
    color: Colors.DARK_GRAY,
    marginBottom: hp(3),
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: hp(2),
  },
  inputLabel: {
    fontFamily: Fonts.LEXEND_MEDIUM,
    fontSize: wp(3.5),
    color: Colors.BLACK,
    marginBottom: hp(0.5),
  },
  input: {
    height: hp(6),
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    fontFamily: Fonts.LEXEND_REGULAR,
    fontSize: wp(3.5),
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: hp(3),
  },
  otpInput: {
    width: wp(12),
    height: wp(12),
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    borderRadius: wp(2),
    textAlign: 'center',
    fontFamily: Fonts.LEXEND_REGULAR,
    fontSize: wp(4),
  },
  button: {
    backgroundColor: Colors.SECONDARY,
    borderRadius: wp(2),
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: hp(2),
  },
  buttonText: {
    fontFamily: Fonts.LEXEND_SEMIBOLD,
    fontSize: wp(4),
    color: Colors.WHITE,
  },
});