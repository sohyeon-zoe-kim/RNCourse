import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export default function App() {
  return (
    <View style={styles.abbContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="당신의 목표를 입력하세요!"
        />
        <Button title="Add goal!!" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goal...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  abbContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
})
