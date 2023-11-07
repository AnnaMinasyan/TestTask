import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { BLACK, GREY, PINK, WHITE } from '../../../../assets/colors';
import IconBack from '../../../../assets/svgs/icon-back.svg'
import { SvgProps } from 'react-native-svg';

type Props = {
  title: string;
  style?: ViewStyle;
  color?: string
}
export const TextButton: React.FC<Props> = ({ title, style, color=GREY }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title,{color}]}>
        {title}
      </Text>
    </View>
  )
}
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight:24,
  },
  icon:{
    marginRight:8
  }
})