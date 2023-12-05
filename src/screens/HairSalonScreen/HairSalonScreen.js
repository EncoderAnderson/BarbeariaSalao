import React from "react";
import { useState, useEffec } from "react";
import stylesHairSalon from "./HairSalonScreenStyle"
import { Text, View, Image, Animated, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Stars from "../../components/Stars";

const HairSalonScreen = () => {
       return (
              <ScrollView>
                     <Image source={require('../../assets/Dersin.png')}
                            style={{ height: 40, width: 40, resizeMode: 'cover' }}
                     />
                     <Text style={{ bottom: 20 }}> CARALHO QUE CHEIRO DE PIKAAA</Text>
                     <Text style={{ bottom: 100 }}> CARALHO QUE CHEIRO DE PIKAAA</Text>
                     <Text style={{ bottom: 150 }}> CARALHO QUE CHEIRO DE PIKAAA</Text>
                     <Text style={{ bottom: 200 }}> CARALHO QUE CHEIRO DE PIKAAA</Text>
                     <Text style={{ bottom: 250 }}> CARALHO QUE CHEIRO DE PIKAAA</Text>

                     <Image source={require('../../assets/Dersin.png')}
                            style={{ height: 40, width: 40, resizeMode: 'cover', left: 50 }}
                     />



              </ScrollView>
       );
};
export default HairSalonScreen;