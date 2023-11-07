import * as React from 'react';
import { Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/app/home/home.screen';
import { FavoritesScreen } from '../screens/app/favorites/favorites.screen';
import { GiftsScreen } from '../screens/app/gifts/gifts.screen';
import { ProfileScreen } from '../screens/app/profile/profile.screen';
import IconHome from '../assets/svgs/icon-home.svg';
import IconGift from '../assets/svgs/icon-gift.svg';
import IconFavorite from '../assets/svgs/icon-favorit.svg';
import IconProfile from '../assets/svgs/icon-profile.svg'
import { BLACK, DARK_BLUE, WHITE } from '../assets/colors';
const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
  const tabs = {
    Home: { icon: <IconHome fill={BLACK} />, activeIcon: <IconHome fill={DARK_BLUE} /> },
    Gifts: { icon: <IconGift fill={BLACK} />, activeIcon: <IconGift fill={DARK_BLUE} /> },
    Favorites: { icon: <IconFavorite fill={BLACK} />, activeIcon: <IconFavorite fill={DARK_BLUE} /> },
    Profile: { icon: <IconProfile fill={BLACK} />, activeIcon: <IconProfile fill={DARK_BLUE} /> }
  }
  return (
    <Tab.Navigator initialRouteName="Gifts"
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, }) => {
            return focused ? tabs[route.name].activeIcon : tabs[route.name].icon;
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: WHITE,
            borderTopLeftRadius: 11,
            borderTopRightRadius: 11,
            position: "absolute",
            bottom: 0,
          }
        })
      } >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Gifts" component={GiftsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </ Tab.Navigator>
  );
}