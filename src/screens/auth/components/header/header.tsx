import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BLACK } from '../../../../assets/colors';
import IconBack from '../../../../assets/svgs/icon-back.svg'
 
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
    paddingHorizontal: 16
  },
  title: {
    color: BLACK,
    fontSize: 20,
    fontWeight: '500'
  }
})