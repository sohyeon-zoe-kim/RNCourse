import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import UserScreen from './screens/UserScreen'
import WelcomScreen from './screens/WelcomeScreen'

const Bottom = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#ff1a42' },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#ff1a42',
        }}
      >
        <Bottom.Screen
          name="welcome"
          component={WelcomScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Bottom.Screen
          name="user"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  )
}
