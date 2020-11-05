import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Search from '../components/Search'

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Rechercher"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Rechercher"
        component={Search}
        options={{ title: 'Rechercher' }}
      />
      {/* <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ user: 'me' }}
      /> */}
    </Stack.Navigator>
  );
}

export default RootStack