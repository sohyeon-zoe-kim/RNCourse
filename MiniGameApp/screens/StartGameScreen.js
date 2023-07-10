import { TextInput, View, StyleSheet } from 'react-native'

import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
  return (
    <View style={style.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

export default StartGameScreen

const style = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: '#ff1a42',
    borderRadius: 8,
    elevation: 4, //android에서 shadow 넣는 방법
    shadowColor: 'black', //shadowXXX -> iOS에서 shadow 넣는 방법
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})