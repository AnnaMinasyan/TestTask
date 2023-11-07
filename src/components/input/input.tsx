import React, { useState } from 'react';
import { View, Pressable, StyleSheet, ViewStyle } from 'react-native';
import { LIGHT_GREY } from '../../assets/colors';
import { SvgProps } from 'react-native-svg';
import { TextInput } from 'react-native-gesture-handler';
import IconEye from '../../assets/svgs/icon-eye.svg'
type Props = {
  placeholder: string;
  Icon?: React.FC<SvgProps>;
  style?: ViewStyle;
  value?: string;
  onChangeText: (value: string) => void;
  isSecure?: boolean
}
export const Input: React.FC<Props> = ({ placeholder, Icon, style, value, onChangeText, isSecure }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(isSecure)
  return (
    <View style={[styles.container, style]}>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText} />
      {isSecure &&
        <Pressable style={styles.button}
          onTouchStart={() => { setSecureTextEntry(false) }}
          onTouchEnd={() => { setSecureTextEntry(true) }}>
          <IconEye />
        </Pressable>}
    </View>
  )
}
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: LIGHT_GREY,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    width: '90%',
  },
  button: {
    padding: 10
  },
  icon: {
    marginRight: 8
  }
})