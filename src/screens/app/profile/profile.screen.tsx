// import React from 'react';
// import { View, Text } from 'react-native';

// export const ProfileScreen: React.FC = () => {
//   return (
//     <View>
//       <Text>ProfileScreen</Text>
//     </View>
//   )
// }
import React from 'react'
import { Text, FlatList, Pressable, View } from 'react-native'
import { gql, useQuery } from '@apollo/client'

import { styles } from './profile.styles'

import { setContext } from '@apollo/client/link/context';
import { GET_ME } from '../../../api/auth';
import { Avatar } from '../../../components/avatar';
import { Block } from './components/block';
import { Background } from '../../../components/background';

import IconLike from '../../../assets/svgs/icon-like.svg'
import IconProfile from '../../../assets/svgs/icon-profile.svg'
import { BLUE, PINK, PURPLE } from '../../../assets/colors';
import { Info } from './components/info';
import { Button } from '../../auth/components/buttons/button';
import { changeIsLogined } from '../../../store/actions/auth-actions';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { IUser } from '../../types';
import { tokenSelector } from '../../../store/selectors/auth-selector';

export const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch()
const token=useSelector(tokenSelector)
  const { data } = useQuery(GET_ME,
    {
      context: {
        headers: {
          "authorization": `Bearer ${token}`
        },
      },
    })
  const info: IUser = data?.getMe
  const handleLogout = async () => {
    dispatch(changeIsLogined(false))
    await AsyncStorage.clear()
  }
  if (info) {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Avatar
            title={info.name}
            subTitle={info.additionalInfo.advantage}
            url={'https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png'} />
        </View>

        <View style={styles.main}>
          <View style={styles.blocks}>
            <Block title={info.likesCount} Icon={<IconLike height={24} width={24} />} />
            <Block title={info.subscribersCount} Icon={<IconProfile height={30} width={30} fill={PINK} />} />
            <Block title={info.subscriptionsCount} Icon={<IconProfile height={30} width={30} fill={PURPLE} />} />
          </View>
          <View style={styles.infoBlock}>
            <Info title="Почта" value={info.email} />
            <Info title="Номер" value={info.phone} />
            <Info title="Город" value={info.address.city} />
            <Info title="Адрес" value={info.address.coordinates[0].address} />

          </View>
          <Button title='Выйти' style={styles.infoBlock} onPress={handleLogout} />

        </View>
      </View>

    )
  } else {
    return null
  }
}
