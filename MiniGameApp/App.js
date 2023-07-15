import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'

import GameScreen from './screens/GameScreen'
import StartGameScreen from './screens/StartGameScreen'

export default function App() {
  const [pickedNumber, setPickedNumber] = useState()

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (pickedNumber) {
    screen = <GameScreen />
  }

  function pickedNumberHandler(pickedNumber) {
    setPickedNumber(pickedNumber)
  }

  return (
    <LinearGradient colors={['#ff4463', '#e5ff7e']} style={styles.rootScreen}>
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
