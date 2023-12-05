import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from "react-native";
import SocializeScreen from "./screens/SocializeScreen/SocializeScreen"
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import ProfessionalsScreen from "./screens/ProfessionalsScreen/ProfessionalsScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import BarbersScreen from "./screens/BarbersScreen/BarbersScreen";
import { Dimensions } from "react-native";
import stylesProfile from "./screens/ProfileScreen/ProfileScreenStyle";
import { BlurView } from 'expo-blur';


const { width, height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();
const ProfileTabIcon = ({ focused, size, profileSelected }) => (

  <View style={{ alignItems: "center", alignSelf: 'center', right: -2 }}>

    <Image
      source={require('./assets/Dersin.png')}

      style={{
        width: size * 1.5, height: size * 1.5, borderRadius: 1, position: 'absolute', borderWidth: 1, bottom: -3,
        borderRadius: 100, // Para tornar a imagem redonda
        borderColor: "black", // Cor da borda
        shadowColor: "rgba(128, 0, 128, 1)", // Cor da sombra roxa com 50% de transparência
        shadowOffset: { width: 10, height: 10 }, // Deslocamento da sombra
        shadowRadius: 30, // Raio da sombra
        shadowOpacity: 1, // Opacidade da sombra
        shadowOpacity: profileSelected ? 1 : 0.5, // Altere a opacidade com base na seleção


      }} />

  </View>
);

export default function Routes() {

  const [activeScreen, setActiveScreen] = useState(""); // Declare a variável activeScreen


  return (
    <Tab.Navigator initialRouteName="Perfil"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Procurar') {
            iconName = focused ? 'ios-business' : 'ios-business-outline';
          }

          else if (route.name === 'Profissionais') {
            iconName = focused ? 'ios-cut' : 'ios-cut-outline';
          }

          else if (route.name === 'Perfil') {
            return <ProfileTabIcon focused={focused ? '#FFF' : '#f8f8f8'} size={25}
            />;
          }

          else if (route.name === 'Socialize') {
            iconName = focused ? 'ios-globe' : 'ios-globe-outline';
          }

          else if (route.name === 'Barbearia e Salão') {
            iconName = focused ? 'ios-book' : 'ios-book-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={30}
              color={color}
              style={{
                top: -17,
                shadowColor: focused ? 'purple' : 'transparent', // Cor da sombra
                shadowOffset: { width: 0, height: 2 }, // Tamanho da sombra
                shadowOpacity: focused ? 1 : 0, // Opacidade da sombra
                shadowRadius: 4, // Raio da sombra
              }}
            />
          );
        },
        tabBarOnPress: ({ navigation, route }) => {
          setActiveScreen(route.name);
          navigation.navigate(route.name);
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {


          height: height * 0.05,
          backgroundColor: '#000000',
          elevation: 50,
          borderTopWidth: 0.01,
          borderBottomWidth: 1.5,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderRadius: 25,
          borderColor: 'purple',
          shadowColor: 'rgba(128, 0, 128, 1)',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 4,

        },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={100} style={{}} />
        ),

      })}
    >



      <Tab.Screen
        name="Barbearia e Salão"
        component={BarbersScreen}
        options={{ headerShown: false }} // Remover o cabeçalho 
      />

      <Tab.Screen
        name="Procurar"
        component={SearchScreen}
        options={{ headerShown: false }} // Remover o cabeçalho
      />

      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{ headerShown: false }} // Remover o cabeçalho 
      />

      <Tab.Screen
        name="Profissionais"
        component={ProfessionalsScreen}
        options={{ headerShown: false }} // Remover o cabeçalho
      />

      <Tab.Screen
        name="Socialize"
        component={SocializeScreen}
        options={{ headerShown: false }} // Remover o cabeçalho
      />

    </Tab.Navigator>

  )
}
