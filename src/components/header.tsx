import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconBack from '../assets/svgs/icon-arrow-back.svg'
import { WHITE } from '../assets/colors';
 
type Props ={
  title: string
}
export const Header: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <IconBack />
      <Text style={styles.title}>
        {title}
      </Text>
      <View />
    </View>
  )
}
export const styles = StyleSheet.create({
  container: {
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    
  },
  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '700'
  }
})