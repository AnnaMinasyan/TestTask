import React, { ReactNode } from 'react'
import { Text, FlatList, Pressable, View, StyleSheet } from 'react-native'
import { BLACK, GREY, LIGHT_GREY, PINK, WHITE } from '../../../../assets/colors'
type Props = {
  Icon: ReactNode,
  title: number,
}
export const Block: React.FC<Props> = ({ Icon, title }) => {

  return (
    <View style={styles.main}>

      <View style={styles.container}>
        <View style={styles.icon}>
          {Icon}
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>

    </View>

  )
}
export const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  container: {
    height: 70,
    width: 70,
    borderRadius: 70,
    backgroundColor: WHITE,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    color: BLACK,
    fontSize: 18,
    fontWeight:"500"
  },
  icon: {}
})