import { StyleSheet, View, Text } from 'react-native'

const GoalItem = props => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{props.text}</Text>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#ff1a42',
    borderRadius: 6,
    padding: 10,
    margin: 5,
  },
  goalItemText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
