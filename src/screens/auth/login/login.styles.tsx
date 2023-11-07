import { StyleSheet } from "react-native";
import { BLACK, WHITE } from "../../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    paddingBottom: 20
  },
  main: {
    flex:1,
    paddingHorizontal: 16,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:20
  },
  title: {
    color: BLACK,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    marginBottom:20
  },
  buttonGroup: {
    width: '100%'
  },
  margin: {
    marginTop: 20
  },
  buttonRegistr: {
    marginTop: 40
  },
  form:{
    width: '100%',
    alignItems:'center'
  }
})