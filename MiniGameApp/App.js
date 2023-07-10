import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'

import StartGameScreen from './screens/StartGameScreen'

export default function App() {
  return (
    <LinearGradient colors={['#ff4463', '#e5ff7e']} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
})
