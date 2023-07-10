import { TextInput, View, StyleSheet } from 'react-native'

import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
  return (
    <View style={style.inputContainer}>
      <TextInput
        style={style.numberinput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={style.buttonsContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
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
    alignItems: 'center',
    shadowColor: 'black', //shadowXXX -> iOS에서 shadow 넣는 방법
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberinput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 2,
    color: '#ffffff',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
})
