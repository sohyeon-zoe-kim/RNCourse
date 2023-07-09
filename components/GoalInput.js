import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'

const GoalInput = props => {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={props.visiable} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://ifh.cc/g/8mwRza.png' }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="당신의 목표를 입력하세요!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} color="#c7c7c7" />
          </View>
          <View style={styles.button}>
            <Button title="Cancle" onPress={props.onCancle} color="#c7c7c7" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    flex: 1,
    padding: 16,
    backgroundColor: '#ff1a42',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 16,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    width: '30%',
  },
  image: {
    width: '100%',
    height: 100,
  },
})
