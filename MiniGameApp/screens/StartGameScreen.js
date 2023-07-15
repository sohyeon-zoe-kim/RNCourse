import { useState } from 'react'
import { TextInput, Text, View, StyleSheet, Alert } from 'react-native'

import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText)
  }

  function resetInputHandler() {
    setEnteredNumber('')
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber, 10)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ])
      return
    }

    onPickNumber(chosenNumber)
  }

  return (
    <View style={styles.rootContainer}>
      <View>
        <Title>Guess My Number</Title>
      </View>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberinput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </Card>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberinput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 28,
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
