import React from 'react';
import { View, Text, Dimensions, StyleSheet, ViewStyle } from 'react-native';
import IconQuestion from '../assets/svgs/icon-question.svg'
import { WHITE } from '../assets/colors';

type Props = {
  title: string;
  style?:ViewStyle
}
export const Question: React.FC<Props> = ({ title,style }) => {
  return (
    <View style={[styles.container,style]}>
      <Text style={styles.title}>{title}</Text>
      <IconQuestion />
    </View>
  )
}
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  title: {
    color: WHITE,
    fontSize: 14,
    fontWeight: '600',
    marginRight:16
  }
})