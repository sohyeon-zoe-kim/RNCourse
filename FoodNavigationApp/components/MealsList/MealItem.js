import { StyleSheet, View, Text, Image } from 'react-native'

import MealCard from '../MealCard'
import MealDetails from '../MealDetails'

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
  return (
    <MealCard id={id}>
      <View>
        <Image source={{ uri: imageUrl }} style={styles.mealImage} />
        <Text style={styles.title}>{title}</Text>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </View>
    </MealCard>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealImage: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
})
