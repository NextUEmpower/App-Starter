import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../Utils/Colors';
import { wp, hp } from '../../Utils/ResponsiveHelpers';

interface CustomHeaderProps {
  onBackPress: () => void;
  isBackBtnVisible?: boolean; 
}

export default function CustomHeader({ onBackPress, isBackBtnVisible = true }: CustomHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/images/common/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      {isBackBtnVisible && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Icon name="arrow-back" size={wp(5)} color={Colors.WHITE} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
    height: hp(4),
    width: wp(25),
  },
  backButton: {
    borderWidth: 1,
    borderColor: Colors.WHITE,
    padding: wp(2),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});