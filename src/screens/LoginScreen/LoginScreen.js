import React, { useState, useEffect } from "react";
import { View, Text, Animated, Dimensions, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { auth } from "../../services/FireBaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import stylesLogin from './LoginScreenStyle';
import stylesLoading from '../../components/LoadingIndicatorStyle';
import LoadingIndicator from "../../components/LoadingIndicator";
import RegisterScreen from "../RegisterScreen/RegisterScreen";

const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
  const [sec, setSec] = useState(true);
  const [displayText, setDisplayText] = useState("Seja bem vindo!");
  const fadeInOutAnim = useState(new Animated.Value(0))[0];
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(""); // Estado para o valor do e-mail
  const [password, setPassword] = useState(""); // Estado para o valor do e-mail
  const [errorLogin, setErrorLogin] = useState("");
  const [fadeInAnim] = useState(new Animated.Value(0));


  useEffect(() => {
    // Inicia a animação de fadeIn quando o componente for montado
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 2000, // 1000 milissegundos = 1 segundo
      useNativeDriver: true, // Use o driver nativo para animações mais suaves
    }).start();
  }, []);

  const Login = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        let user = userCredential.user;
        console.log(user);
        // Navegar para a tela InitialScreen
        navigation.navigate('InitialScreen')
      })
      .catch((error) => {
        setErrorLogin(true)
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorMessage);
      });

  }


  useEffect(() => {
    const toggleText = () => {
      setIsLoading(true);

      Animated.timing(fadeInOutAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start(() => {
        setDisplayText(
          displayText === "Seja bem vindo!" ? "Seja bem vindo!" : "Seja bem vindo!"
        );

        Animated.timing(fadeInOutAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: false,
        }).start(() => {
          setIsLoading(false);
        });
      });
    };

    const interval = setInterval(toggleText, 2400);
    const interval2 = setInterval(toggleText, 1200);
    const interval3 = setInterval(toggleText, 1800);


    return () => clearInterval(interval);
  }, [displayText, fadeInOutAnim]);

  const handleEmailChange = (text) => {
    setEmail(text);
    // Aqui você pode adicionar a lógica para validar o formato do e-mail, se necessário
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    // Aqui você pode adicionar a lógica para validar o formato do e-mail, se necessário
  };


  const navigation = useNavigation();

  const handleLoginScreen = () => {
    navigation.navigate('InitialScreen');
  }
  const handleConectionRegisterScreen = () => {
    navigation.navigate('ConectionRegisterScreen');
  }
  const handleBug = () => {
    navigation.navigate('InitialScreen')
  }

  return (
    <KeyboardAvoidingView
      style={[stylesLogin.Container1, { flex: 1 }]}
      behavior={Platform.OS === "ios" ? "padding" : 'height'}
      keyboardVerticalOffset={-230}
    >

      <Animated.View style={{ bottom: -70, opacity: fadeInAnim }}>
        <Image
          source={require('../../assets/BarberBackground.png')}
          style={{ width: width, height: height, resizeMode: "cover" }}
        />
      </Animated.View>


      <Animated.View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, opacity: fadeInAnim }}>
        <TextInput
          style={[stylesLogin.TextInput, { width: '83%' }, { height: 40 }, { color: 'black' }]}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          onChangeText={handleEmailChange}
          value={email}
        />
      </Animated.View>


      <Animated.View style={{ alignItems: 'center', justifyContent: 'center', bottom: -60, opacity: fadeInAnim }}>

        <TextInput
          style={[stylesLogin.TextInput, { width: '83%' }, { height: 40 }, { color: 'black' }]}
          placeholder="Digite sua senha"
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={sec}

        />
        <TouchableOpacity onPress={() => setSec(!sec)}
          style={[stylesLogin.ButtonAcess, { top: 11, left: 120 }]} >
          <Ionicons name="eye" color="purple" size={25}
            style={{ width: '15%', height: 40, justifyContent: 'center', alignItems: 'center' }} />

        </TouchableOpacity>
      </Animated.View>

      {errorLogin === true
        ?
        <View style={[stylesLogin.contentAlert, { position: 'absolute' }, { justifyContent: "center" }, { alignItems: 'center' }, { alignSelf: 'center' }]} >


          <Animated.Text style={[stylesLogin.warningAlert, { opacity: fadeInOutAnim }, { alignSelf: 'center' }, { top: -500 }]}>
            Email ou senha estão incorretos
          </Animated.Text>

        </View>
        :
        <View>

        </View>
      }

      <View>
        <TouchableOpacity
          style={[stylesLogin.ButtonAcess, { bottom: -50 }]}

        >
          <Animated.Text style={[stylesLogin.ButtonTextPink, { opacity: fadeInOutAnim }]}>
            {displayText}
          </Animated.Text>
        </TouchableOpacity>
      </View>


      <Animated.View style={{ alignItems: 'flex-start', bottom: 550, left: 30, opacity: fadeInAnim }}  >

        <TouchableOpacity style={[stylesLogin.ButtonAcessInitialScreen3]}
          onPress={{ handleBug }}    >
          <Animated.Text style={[stylesLogin.ButtonTextPink5, { opacity: fadeInOutAnim }]}>
            Conectar
          </Animated.Text>
        </TouchableOpacity>

      </Animated.View>


      <Animated.View style={{ alignItems: 'flex-end', bottom: 587, right: 30, opacity: fadeInAnim }}  >
        <TouchableOpacity style={stylesLogin.ButtonAcessInitialScreen3}
          onPress={handleConectionRegisterScreen}      >
          <Animated.Text style={[stylesLogin.ButtonTextPink5, { opacity: fadeInOutAnim }]}>
            Cadastrar
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View>


        <TouchableOpacity style={[stylesLogin.ButtonAcessInitialScreen3, { top: -110 }, { width: 35, height: 35 }, { alignSelf: 'center', borderWidth: 0 }]}
          onPress={handleBug}    >
          <Animated.Text style={[stylesLogin.ButtonTextPink2, { opacity: fadeInOutAnim }]}>
            ◉
          </Animated.Text>
        </TouchableOpacity>

      </Animated.View>

      <View>

        <View style={{ alignItems: "center", justifyContent: "center" }} >
          <TouchableOpacity style={[stylesLogin.ButtonAcessOff, { bottom: 0 }, { alignSelf: "center" }, { position: "relative" }]}>
            <Animated.Text style={[stylesLogin.ButtonTextPink2, { opacity: fadeInOutAnim }, { fontSize: 15 }]}>

            </Animated.Text>
          </TouchableOpacity>
        </View>


      </View>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
