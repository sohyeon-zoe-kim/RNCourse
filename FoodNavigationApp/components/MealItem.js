import { StyleSheet, View, Text, Image } from 'react-native'

import MealCard from '../components/MealCard'

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
  return (
    <MealCard id={id}>
      <View>
        <Image source={{ uri: imageUrl }} style={styles.mealImage} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
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
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
})
