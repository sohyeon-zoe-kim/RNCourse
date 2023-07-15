import { Text, StyleSheet } from 'react-native'

import Colors from '../../constants/colors'

function instructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>
}

export default instructionText

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 18,
    color: Colors.accent500,
  },
})
