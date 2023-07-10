import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, ImageBackground } from 'react-native'

import StartGameScreen from './screens/StartGameScreen'

export default function App() {
  return (
    <LinearGradient colors={['#ff4463', '#e5ff7e']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
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
