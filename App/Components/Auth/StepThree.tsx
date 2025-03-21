import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';
import Fonts from '../../Utils/Fonts';
import { wp, hp } from '../../Utils/ResponsiveHelpers';

interface StepThreeProps {
  newPassword: string;
  confirmPassword: string;
  setNewPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  onSave: () => void;
}

export default function StepThree({
  newPassword,
  confirmPassword,
  setNewPassword,
  setConfirmPassword,
  onSave,
}: StepThreeProps) {
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
      <TouchableOpacity style={styles.button} onPress={onSave}>
        <Text style={styles.buttonText}>Save</Text>
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
