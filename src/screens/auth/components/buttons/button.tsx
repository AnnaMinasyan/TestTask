import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { BLACK, PINK, WHITE } from '../../../../assets/colors';
import IconBack from '../../../../assets/svgs/icon-back.svg'
import { SvgProps } from 'react-native-svg';

type Props = {
  title: string;
  Icon?: React.FC<SvgProps>;
  style?: ViewStyle;
  color?: string;
  onPress?: () => void
}
export const Button: React.FC<Props> = ({ title, Icon, style, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style, { backgroundColor: color ?? PINK }]}>
      {Icon && <Icon style={styles.icon} />}
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 20
  },
  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 25,
  },
  icon: {
    marginRight: 8
  }
})