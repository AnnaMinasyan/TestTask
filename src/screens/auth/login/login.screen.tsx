import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './login.styles';
import { Header } from '../components/header/header';
import Logo from '../../../assets/svgs/logo.svg';
import { Button } from '../components/buttons/button';
import { BLACK, BLUE, RED } from '../../../assets/colors';
import IconVK from '../../../assets/svgs/icon-vk.svg';
import IconYandex from '../../../assets/svgs/icon-yandex.svg';
import { TextButton } from '../components/buttons/textButton';
import { Input } from '../../../components/input/input';
import { useQuery } from '@apollo/client';
import { CREATE_TOKENS } from '../../../api/auth';
import { useDispatch } from 'react-redux';
import { changeIsLogined } from '../../../store/actions/auth-actions';
import AsyncStorage from '@react-native-community/async-storage';

export const LoginScreen: React.FC = () => {
  const dispatch = useDispatch()
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { data, error, refetch } = useQuery(CREATE_TOKENS, {
    variables: { login: login, password: password },
  })
  const handleLogin =async () => {
    refetch()
    if (data) {
      console.log(data.createTokens.accessToken);
      dispatch(changeIsLogined(true))
      await AsyncStorage.setItem('token',data.createTokens.accessToken)
    } else if (error) {
      console.log(error);
    }
  }
  return (

    <View style={styles.container}  >
      <Header title='Авторизация' />
      <View style={styles.main}>

        <Logo />
        <View style={styles.form}>
          <Text style={styles.title}>
            Войти
          </Text>
          <Input
            placeholder='Логин или телефон'
            value={login}
            onChangeText={setLogin}
          />
          <Input
            placeholder='Пароль'
            value={password}
            isSecure={true}
            onChangeText={setPassword}
            style={styles.margin}
          />
          <Button title='Войти' style={styles.margin} onPress={handleLogin} />
          <TextButton title='Не помню пароль' />

        </View>
        <View style={styles.buttonGroup}>
          <Button title='Войти через Вконтакте' color={BLUE} Icon={IconVK} />
          <Button title='Войти через Яндекс' color={RED} Icon={IconYandex} style={styles.margin} />
          <TextButton title='Регистрация' color={BLACK} style={styles.buttonRegistr} />
        </View>
      </View>

    </View>
  )
}
