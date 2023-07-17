import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'

import CategoriesScreen from './screens/CategoriesScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import MealDetailScreen from './screens/MealDetailScreen'
import MealsOverViewScreen from './screens/MealsOverViewScreen'
// import FavoritesContextProvider from './store/context/favorites-context'
import { store } from './store/redux/store'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#9DB2BF' },
        headerTintColor: '#1a1a1a',
        sceneContainerStyle: { backgroundColor: '#DDE6ED' },
        drawerActiveBackgroundColor: '#9DB2BF',
        drawerActiveTintColor: '#DDE6ED',
        drawerContentStyle: { backgroundColor: '#eee' },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#9DB2BF' },
              headerTintColor: '#1a1a1a',
              contentStyle: { backgroundColor: '#DDE6ED' },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigator}
              options={{
                title: 'All Categories',
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                title: 'About the Meal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
