import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, Animated, ActivityIndicator } from "react-native";
import styles from '../HomeScreen/HomeScreenStyle';
import stylesLoading from '../../components/LoadingIndicatorStyle';
import LoadingIndicator from '../../components/LoadingIndicator';


const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const [displayText, setDisplayText] = useState("+ Escolhas?");
  const fadeInOutAnim = useState(new Animated.Value(0))[0];
  const [isLoading, setIsLoading] = useState(false);
  const [fadeInAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Inicia a animação de fadeIn quando o componente for montado
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 2000, // 1000 milissegundos = 1 segundo
      useNativeDriver: true, // Use o driver nativo para animações mais suaves
    }).start();
  }, []);

  useEffect(() => {
    const toggleText = () => {
      setIsLoading(true);

      Animated.timing(fadeInOutAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
      }).start(() => {
        setDisplayText(displayText === "+ Conexão?" ? "+ Escolhas!" : "+ Conexão?");

        Animated.timing(fadeInOutAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: false,
        }).start(() => {
          setIsLoading(false);
        });
      });
    };

    const interval = setInterval(toggleText, 1200);
    return () => clearInterval(interval);
  }, [displayText, fadeInOutAnim]);



  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 8000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <View style={styles.Container1}>
      <Animated.View style={{ bottom: -15, opacity: fadeInAnim }}>
        <Image
          source={require('../../assets/BarberBackground.png')}
          style={{ width: width, height: height, resizeMode: 'cover' }}
        />
      </Animated.View>


      <View style={{ top: -100 }}>

        <TouchableOpacity style={[styles.ButtonXDesignBeauty, { position: 'relative' }, { alignSelf: 'center', shadowColor: '#9400D3' }]}
        >
          <Animated.Text style={[styles.ButtonTextPinkDesign, { opacity: fadeInOutAnim }]}>
            X Design
          </Animated.Text>
        </TouchableOpacity>

      </View>

      {isLoading && <ActivityIndicator color='white' size={30} style={[stylesLoading.Loading, { opacity: 0.8 }]} />}


      <TouchableOpacity
        style={styles.ButtonAcess}

      >
        <Animated.Text

          style={[styles.ButtonTextPink, { opacity: fadeInOutAnim }]}>
          {displayText}
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
