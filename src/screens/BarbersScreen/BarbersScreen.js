import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Animated, Dimensions, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import stylesBarbers from "./BarbersScreenStyle";

const { width, height } = Dimensions.get("window");

const BarbersScreen = () => {
  const [displayText, setDisplayText] = useState("Barbearias e Salões");
  const fadeInOutAnim = useState(new Animated.Value(0))[0];
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const toggleText = () => {
      setIsLoading(true);

      Animated.timing(fadeInOutAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setDisplayText(
          displayText === "Barbearias e Salões" ? "Barbearias e Salões" : "Barbearias e Salões"
        );

        Animated.timing(fadeInOutAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start(() => {
          setIsLoading(false);
        });
      });
    };

    const interval = setInterval(toggleText, 600);
    const interva2 = setInterval(toggleText, 600);



    return () => clearInterval(interval);
  }, [displayText, fadeInOutAnim]);





  return (

    <SafeAreaView style={stylesBarbers.Container1}>
      <View style={{ MarginTop: 20 }}>
        <Image
          source={require('../../assets/BarberBackgroundDefault.png')}
          style={{ width: width, height: height, resizeMode: 'cover' }}
        />
      </View>


      <View style={stylesBarbers.Container2} >
        <TouchableOpacity
          style={stylesBarbers.ButtonAcess}

        >
          <Animated.Text style={[stylesBarbers.ButtonTextPink, { opacity: fadeInOutAnim }]}>
            {displayText}
          </Animated.Text>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BarbersScreen;