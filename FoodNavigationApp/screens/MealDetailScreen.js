import { useLayoutEffect } from 'react'
import { StyleSheet, View, Text, Image, ScrollView, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import IconButton from '../components/IconButton'
import List from '../components/MealDetail/List'
import SubTitle from '../components/MealDetail/Subtitle'
import MealDetails from '../components/MealDetails'
import { MEALS } from '../data/dummy-data'
import { addFavorite, removeFavorite } from '../store/redux/favorites'

function MealDetailScreen({ route, navigation }) {
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)
  const dispatch = useDispatch()

  const mealId = route.params.mealId
  const selectedMeal = MEALS.find(meal => meal.id === mealId)
  const isMealFavorite = favoriteMealIds.includes(mealId)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function changeFavoritedStatusHandler() {
    if (isMealFavorite) {
      dispatch(removeFavorite({ id: mealId }))
    } else {
      dispatch(addFavorite({ id: mealId }))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isMealFavorite ? 'star' : 'star-outline'}
            color="white"
            onPress={changeFavoritedStatusHandler}
          />
        )
      },
    })
  }, [navigation, isMealFavorite, changeFavoritedStatusHandler])

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredient</SubTitle>
          <List data={selectedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
    color: '#27374D',
  },
  detailText: {
    color: '#526D82',
  },
  subTitle: {
    color: '#526D82',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: '#526D82',
    borderBottomWidth: 2,
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
})
