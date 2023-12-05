import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import ProfessionalsScreen from './src/screens/ProfessionalsScreen/ProfessionalsScreen';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import SocializeScreen from './src/screens/SocializeScreen/SocializeScreen';
import InitialScreen from './src/screens/InitialScreen/InitialScreen';
import BarbersScreen from './src/screens/BarbersScreen/BarbersScreen';
import ConectionRegisterScreen from './src/screens/ConectionsScreen/ConectionRegisterScreen';
import RegisterHairdressScreen from './src/screens/RegisterHairdress/RegisterHairdressScreen'
import HairSalonScreen from './src/screens/HairSalonScreen/HairSalonScreen';
import ProfessionalsDisplayList from './src/screens/ProfessionalsScreen/ProfessionalsDisplayList';


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='HomeScreen'>

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="ConectionRegisterScreen"
          component={ConectionRegisterScreen}
          options={{ headerShown: false }}  />

        <Stack.Screen
          name='RegisterScreen'
          component={RegisterScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name='RegisterHairdressScreen'
          component={RegisterHairdressScreen}
          options={{ headerShown: false }} />


        <Stack.Screen
          name="InitialScreen"
          component={InitialScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="SocializeScreen"
          component={SocializeScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="ProfessionalsScreen"
          component={ProfessionalsScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="BarbeariaeSalão"
          component={BarbersScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="HairSalonScreen"
          component={HairSalonScreen}
          options={{ headerShown: false }} />



        <Stack.Screen
          name="ProfessionalsDisplayList"
          component={ProfessionalsDisplayList}
          options={{ headerShown: false }} />




      </Stack.Navigator>

    </NavigationContainer>
  );
};
export default App;