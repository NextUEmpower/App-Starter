import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fonts from '../../Utils/Fonts';
import Colors from '../../Utils/Colors';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontFamily: Fonts.LEXEND_BOLD,
    fontSize: 24,
    color: Colors.PRIMARY_DARK,
  },
});