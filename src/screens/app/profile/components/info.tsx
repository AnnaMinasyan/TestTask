import React, { ReactNode } from 'react'
import { Text, FlatList, Pressable, View, StyleSheet } from 'react-native'
import { BLACK, DARK_BLUE, GREY, LIGHT_GREY, PINK, WHITE } from '../../../../assets/colors'
type Props = {
  value: string,
  title: string,
}
export const Info: React.FC<Props> = ({ value, title }) => {

  return (
    <View style={styles.main}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.value} numberOfLines={2}>{value}</Text>
      </View>
    </View>

  )
}
export const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleContainer: {
    width: "30%",
    padding:6
  },
  valueContainer: {
    width: "70%",
    padding:6

  },
  title: {
    color: DARK_BLUE,
    fontSize: 18,
    fontWeight: "500"
  },
  value: {
    color: BLACK,
    fontSize: 16,
    fontWeight: "500"
  }
})