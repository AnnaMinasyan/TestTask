import { StyleSheet } from 'react-native'
import { LIGHT_GREY, PINK, LIGHT_PURPLE, WHITE, DARK_BLUE } from '../../../assets/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },

  blocks: {
   flexDirection:'row',
   justifyContent: 'space-between',
   paddingHorizontal:50
  },
  headerContainer: {
    backgroundColor: DARK_BLUE,
    width: '100%',
    paddingVertical:30
  },
  main:{
    paddingHorizontal: 40,
    marginTop: -30,
    backgroundColor: LIGHT_GREY,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 15
  },
  infoBlock:{
    marginTop:24
  }
})