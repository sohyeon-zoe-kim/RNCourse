import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Pressable } from 'react-native'

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressedIcon}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  pressedIcon: {
    opacity: 0.7,
  },
})
