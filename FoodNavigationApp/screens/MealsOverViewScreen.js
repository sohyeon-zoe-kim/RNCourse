import { View, FlatList, StyleSheet } from 'react-native'

import MealItem from '../components/MealItem'
import { MEALS } from '../data/dummy-data'

function MealsOverViewScreen({ route }) {
  const catId = route.params.categoryId
  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0
  })

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />
  }

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  )
}

export default MealsOverViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
