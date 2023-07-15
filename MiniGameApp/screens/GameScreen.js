import { useState } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'

import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'

let minBoundary = 1
let maxBoundary = 100
const DIRECTION = {
  LOWER: 'lower',
  GREATER: 'greater',
}
Object.freeze(DIRECTION)

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber,
  )
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude)
    } else {
      return rndNum
    }
  }

  function nextGuessHandler(direction) {
    if (
      (direction === DIRECTION.LOWER && currentGuess < userNumber) ||
      (direction === DIRECTION.GREATER && currentGuess > userNumber)
    ) {
      Alert.alert("Dont' lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ])
      return
    }
    if (direction === DIRECTION.LOWER) {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    )
    setCurrentGuess(newRndNumber)
  }

  return (
    <View style={styles.screen}>
      <Title>Guess Number</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, DIRECTION.LOWER)}>
            -
          </PrimaryButton>
          <PrimaryButton
            onPress={nextGuessHandler.bind(this, DIRECTION.GREATER)}
          >
            +
          </PrimaryButton>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
})
