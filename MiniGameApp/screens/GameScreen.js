import { Ionicons } from '@expo/vector-icons'
import { useState, useEffect } from 'react'
import { View, StyleSheet, Alert, Text, FlatList } from 'react-native'

import GuessLogItem from '../components/game/GuessLogItem'
import NumberContainer from '../components/game/NumberContainer'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'

let minBoundary = 1
let maxBoundary = 100
const DIRECTION = {
  LOWER: 'lower',
  GREATER: 'greater',
}
Object.freeze(DIRECTION)

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

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
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRndNumber)
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, onGameOver, guessRounds])

  const guessRoundsListLength = guessRounds.length

  return (
    <View style={styles.screen}>
      <Title>Guess Number</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, DIRECTION.LOWER)}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, DIRECTION.GREATER)}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          alwaysBounceVertiwcal={false}
          data={guessRounds}
          renderItem={({ item, index }) => {
            return (
              <GuessLogItem
                roundNumber={guessRoundsListLength - index}
                guess={item}
              ></GuessLogItem>
            )
          }}
          keyExtractor={item => {
            return item
          }}
        ></FlatList>
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  button: {
    flex: 1,
  },
})
