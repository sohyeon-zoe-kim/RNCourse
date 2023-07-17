import { useLayoutEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import MealItem from '../components/MealItem'
import { MEALS, CATEGORIES } from '../data/dummy-data'

function MealsOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0
  })

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(categoryItem => {
      return categoryItem.id === catId
    }).title

    navigation.setOptions({
      title: categoryTitle,
    })
  }, [catId, navigation])

  function renderMealItem(itemData) {
    const item = itemData.item
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    }
    return <MealItem {...mealItemProps} />
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
