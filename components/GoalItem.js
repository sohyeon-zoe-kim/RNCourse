import { StyleSheet, View, Text, Pressable } from 'react-native'

const GoalItem = props => {
  return (
    <Pressable
      android_ripple={{ color: '#dddddd' }}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{props.text}</Text>
      </View>
    </Pressable>
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
  pressItem: {
    opacity: 0.5,
    color: '#ff4d6c',
  },
})
