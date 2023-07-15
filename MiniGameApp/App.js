import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'

import Colors from './constants/colors'
import GameOverScreen from './screens/GameOverScreen'
import GameScreen from './screens/GameScreen'
import StartGameScreen from './screens/StartGameScreen'

export default function App() {
  const [pickedNumber, setPickedNumber] = useState()
  const [isGameOver, setIsGameOver] = useState(true)

  function pickedNumberHandler(pickedNumber) {
    setPickedNumber(pickedNumber)
    setIsGameOver(false)
  }

  function gameOverHandler() {
    setIsGameOver(true)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler} />
  }

  if (pickedNumber && isGameOver) {
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
