import React from 'react';
import { View, Text, Dimensions, StyleSheet, ViewStyle } from 'react-native';
import { BLACK, PINK, WHITE } from '../assets/colors';

type Props = {
  title: number;
  style?: ViewStyle;
  isStopedTime?:boolean;
}
export const Slot: React.FC<Props> = ({ title, style,isStopedTime=true}) => {
  const disActive = title === 0 && isStopedTime
  return (
    <View style={[styles.container, !disActive && styles.activeBox, style]}>
      <Text style={[styles.title, !disActive && styles.activeText]}>{title ?? 0}</Text>
    </View>
  )
}
export const styles = StyleSheet.create({
  container: {
    height: 106,
    width: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,

  },
  title: {
    color: BLACK,
    fontSize: 50,
    fontWeight: '600',
  },
  activeBox: {
    backgroundColor: PINK,
  },
  activeText: {
    color: WHITE,

  }
})