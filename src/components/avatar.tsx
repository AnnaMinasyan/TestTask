import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, ViewStyle, ImageProps } from 'react-native';
import { DARK_BLUE, PINK, WHITE } from '../assets/colors';

type Props = {
  title: string;
  url: string;
  style?: ViewStyle;
  subTitle:string
}

export const Avatar: React.FC<Props> = ({ title, url, style,subTitle }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>
      <Text style={styles.text}>{title}</Text>
            <Text style={styles.subTitle}>~~ {subTitle} ~~</Text>

    </View>
  )
}
export const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:10
  },
  imageContainer: {
    backgroundColor: WHITE,
    height: 150,
    width: 150,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 150,
    width: 150,
  },
  text: {
    fontSize: 24,
    color: WHITE
  },
  subTitle:{
    fontSize: 16,
    color: PINK
  }
})
