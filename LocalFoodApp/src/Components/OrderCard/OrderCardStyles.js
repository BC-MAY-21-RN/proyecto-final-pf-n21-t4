import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerCard: {
    marginTop: 40
  },
  fontInfoBold: {
    fontWeight: 'bold',
    color: 'black'
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  btnContact: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
    padding: 5,
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 150
  },
  btnOptions: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
    width: 150,
    alignItems: 'center'
  }
})