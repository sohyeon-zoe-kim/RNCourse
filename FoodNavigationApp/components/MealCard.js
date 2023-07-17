import { View, StyleSheet, Pressable } from 'react-native'
function MealCard({ children }) {
  return (
    <View style={styles.mealCard}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>{children}</View>
      </Pressable>
    </View>
  )
}

export default MealCard

const styles = StyleSheet.create({
  mealCard: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
})
