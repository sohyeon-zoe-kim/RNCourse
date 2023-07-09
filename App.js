import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'

import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const addGoalHandler = enteredGoalText => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
    endAddGoalHandler()
  }

  const deleteGoalHandler = id => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id)
    })
  }

  const startAddGoalHandler = () => {
    setIsModalVisible(true)
  }

  const endAddGoalHandler = () => {
    setIsModalVisible(false)
  }

  return (
    <View style={styles.abbContainer}>
      <Button title="Add Goals!!" onPress={startAddGoalHandler} />
      <GoalInput
        visiable={isModalVisible}
        onAddGoal={addGoalHandler}
        onCancle={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={({ item }) => {
            return (
              <GoalItem
                text={item.text}
                id={item.id}
                onDeleteItem={deleteGoalHandler}
              />
            )
          }}
          keyExtractor={item => {
            return item.id
          }}
        />
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
  goalsContainer: {
    flex: 5,
    gap: 10,
  },
})
