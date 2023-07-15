import { StyleSheet, View, Image, Text } from 'react-native'

import Title from '../components/ui/Title'
import Colors from '../constants/colors'

function StartGameScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
      <Text>Your phone neede X rounds o guess the number Y</Text>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.secondary500,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
