import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';
import Fonts from '../../Utils/Fonts';
import { wp, hp } from '../../Utils/ResponsiveHelpers';

interface StepTwoProps {
  otp: string[];
  otpRefs: React.RefObject<TextInput | null>[];
  handleOtpChange: (value: string, index: number) => void;
  onNext: () => void;
}

export default function StepTwo({ otp, otpRefs, handleOtpChange, onNext }: StepTwoProps) {
  return (
    <>
      <Text style={styles.description}>
        Enter the 6-digit confirmation code sent to your email.
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={otpRefs[index]}
            style={styles.otpInput}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  description: {
    fontFamily: Fonts.LEXEND_REGULAR,
    fontSize: wp(3.5),
    color: Colors.DARK_GRAY,
    marginBottom: hp(2),
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: hp(2),
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
