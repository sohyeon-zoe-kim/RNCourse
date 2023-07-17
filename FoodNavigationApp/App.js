import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverViewScreen from './screens/MealsOverViewScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#ccc' },
            headerTintColor: '#1a1a1a',
            contentStyle: { backgroundColor: '#eee' },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
