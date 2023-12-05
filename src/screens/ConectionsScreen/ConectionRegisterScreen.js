import React from "react";
import { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import stylesConectionRegisterScreen from "./ConectionRegisterScreenStyle";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const ConectionRegisterScreen = () => {
    const navigation = useNavigation();

    const handleRegisterScreen = () => {
        navigation.navigate("RegisterScreen")
    }
    const handleRegisterHairdressScreen = () => {
        navigation.navigate("RegisterHairdressScreen")
    }

    return (
        <SafeAreaView style={{ flex: 1, position: 'absolute', justifyContent: 'center', bottom: -5, backgroundColor: 'black' }} >
            <Image source={require('../../assets/BarberBackgroundDefault.png')}
                style={{ width: width, height: height, resizeMode: 'cover' }}
            />
            <View style={{ position: 'absolute', top: "15%", alignSelf: 'center', alignItems: 'center' }}  >
                <TouchableOpacity style={[stylesConectionRegisterScreen.ButtonAcessImage]}
                    onPress={handleRegisterScreen}
                >

                    <Image source={require('../../assets/ClientImage.png')}
                        style={[stylesConectionRegisterScreen.BackgroundImage, { resizeMode: 'cover' }, { position: 'absolute', top: "15%", alignSelf: "center", alignItems: 'center' }]}
                    />
                </TouchableOpacity>


                <Text style={[stylesConectionRegisterScreen.ButtonTextPink2, { top: -170 }]} >
                    Você é um cliente?
                </Text>
            </View>



            <View style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', position: 'absolute' }}>
                <Text style={[stylesConectionRegisterScreen.ButtonTextPink2, { top: -15 }]} >
                    Ou
                </Text>
            </View>


            <View style={{ position: 'absolute', bottom: "15%", alignSelf: "center", alignItems: 'center' }}  >
                <TouchableOpacity style={[stylesConectionRegisterScreen.ButtonAcessImage]}
                    onPress={handleRegisterHairdressScreen}
                >
                    <Image source={require('../../assets/ProfessionalImage.png')}
                        style={[stylesConectionRegisterScreen.BackgroundImage, { resizeMode: 'cover' }, { position: 'absolute', bottom: "15%", alignSelf: "center", alignItems: 'center' }]}
                    />
                </TouchableOpacity>


                <Text style={[stylesConectionRegisterScreen.ButtonTextPink2, { bottom: -25 }]} >
                    Você é um profissional?
                </Text>
            </View>


        </SafeAreaView>
    );
};

export default ConectionRegisterScreen;