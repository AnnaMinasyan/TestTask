
import React, { useEffect, useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './auth/login/login.screen';
import { useDispatch, useSelector } from 'react-redux';
import { isloginedSelector } from '../store/selectors/auth-selector';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator, View } from 'react-native';
import HomeNavigation from '../navigations/home';
import { addToken, changeIsLogined } from '../store/actions/auth-actions';


function Main(): JSX.Element {
  const isLogined = useSelector(isloginedSelector);
  const [isloading, seIsloading] = useState(true)
  const dispatch = useDispatch()
  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      dispatch(addToken(token))
      dispatch(changeIsLogined(true))
    } else {
      dispatch(changeIsLogined(false))
    }
  }
  useEffect(() => {
    checkToken().then(() => {
      seIsloading(false)
    })
  }, [])
  if (isloading) {
    return <View>
      <ActivityIndicator />
    </View>
  }
  console.log(isLogined);

  return (
    <NavigationContainer>
      {isLogined  ?
        <HomeNavigation /> :
        <LoginScreen />
      }
    </NavigationContainer>

  );
}

export default Main;
