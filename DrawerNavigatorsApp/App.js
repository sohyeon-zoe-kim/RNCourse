import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import UserScreen from './screens/UserScreen'
import WelcomScreen from './screens/WelcomeScreen'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="welcome" component={WelcomScreen} />
        <Drawer.Screen name="user" component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
