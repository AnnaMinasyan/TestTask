import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, ViewStyle, ImageProps } from 'react-native';
import { PINK, WHITE } from '../assets/colors';

type Props = {
  title: string;
  url: ImageProps;
  count: number;
  style?: ViewStyle
}

export const ImageContainer: React.FC<Props> = ({ title, url, count, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <Image source={url} />
      </View>
      <View style={styles.countContainer}>
        <View style={styles.count}>
          <Text style={styles.text}>{count}</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  )
}
export const styles = StyleSheet.create({
  container: {
  },
  imageContainer: {
    backgroundColor: WHITE,
    height: 96,
    width: 96,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countContainer: {
    marginTop: -110,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: -14
  },
  count: {
    height: 24,
    width: 24,
    borderRadius: 24,
    backgroundColor: PINK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: WHITE,
    fontSize: 14,
    fontWeight: '600',
  },
  titleContainer: {
    width: 96,
    marginTop: 96,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
