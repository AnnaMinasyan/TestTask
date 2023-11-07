import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { DARK_BLUE, PURPLE } from '../assets/colors';
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width;
export const Background: React.FC = () => {
  return (
    <View style={{ position:'absolute', width:width, height:height}}>
      <View style={{
        backgroundColor: DARK_BLUE, height: height + height * 0.1, width: width,
        transform: [{ rotate: '38deg' }],
        position: 'absolute',
        top: -(width / 2),
        left: -width / 3
      }} />

      <View style={{
        backgroundColor: PURPLE, height: height + height * 0.1,
        width: width, transform: [{ rotate: '38deg' }],
        position: 'absolute',
        bottom: -(width - width * 0.6),
        right: -width / 3
      }} />
    </View>
  )
}
