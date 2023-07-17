import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import UserScreen from './screens/UserScreen'
import WelcomScreen from './screens/WelcomeScreen'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#ff1a42' },
          headerTintColor: 'white',
          drawerActiveBackgroundColor: '#ffd8df',
          drawerActiveTintColor: '#ff1a42',
        }}
      >
        <Drawer.Screen
          name="welcome"
          component={WelcomScreen}
          options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="user"
          component={UserScreen}
          options={{
            drawerLabel: 'User Screen',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
