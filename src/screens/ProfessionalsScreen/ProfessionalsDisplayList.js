import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Animated, Dimensions, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, FlatList, ScrollView } from "react-native";
import MapsPosition from "../../components/MapsPosition";
import stylesProfessionals from "./ProfessionalsScreenStyle";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import ProfessionalsComponentList from "./ProfessionalsComponentList";
import { ProfessionalsList } from "./ProfessionalsComponentList";
import { SeparatorItem } from "./SeparatorItem";

const { width, height } = Dimensions.get("window");

const ProfessionalsDisplayList = () => {
  const [displayText, setDisplayText] = useState("Cabeleleiras");
  const [displayText2, setDisplayText2] = useState("Ver perfil");
  const [displayText3, setDisplayText3] = useState("Salvar nos favoritos?");
  const fadeInOutAnim = useState(new Animated.Value(0))[0];
  const fadeInOutAnim2 = useState(new Animated.Value(0))[0];
  const fadeInOutAnim3 = useState(new Animated.Value(0))[0];
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [fadeInAnim] = useState(new Animated.Value(0));
  const [errorLogin, setErrorLogin] = useState("");
  const [searchText, setSearchText] = useState('');
  const [buttonVisible, setbuttonVisible] = useState(true);
  const [list, setList] = useState(ProfessionalsList);


  const handleButtonGPS = () => {
    setbuttonVisible(false);
  }

  useEffect(() => {
    if (searchText === '') {
      setList(ProfessionalsList);
    } else {
      setList(ProfessionalsList.filter(item => (item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)));
    }
  }, []);

  const handleOrderClick = () => {
    let newList = [...ProfessionalsList];

    newList.sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0);

    setList(newList);
  };


  useEffect(() => {
    // Inicia a animação de fadeIn quando o componente for montado
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000, // 1000 milissegundos = 1 segundo
      useNativeDriver: true, // Use o driver nativo para animações mais suaves
    }).start();
  }, []);


  useEffect(() => {
    const toggleText = (fadeInOutAnim, setDisplayText, newText, duration, setIsLoading) => {
      setIsLoading(true);

      Animated.timing(fadeInOutAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start(() => {
        setDisplayText(newText);

        Animated.timing(fadeInOutAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: false,
        }).start(() => {
          setIsLoading(false);
        });
      });
    };



    const interval2 = setInterval(() => {
      toggleText(fadeInOutAnim2, setDisplayText2, "Barbeiros", 1000, setIsLoading2);
    }, 2000);



    const interval3 = setInterval(() => {
      toggleText(fadeInOutAnim, setDisplayText3, "Cabeleleiras", 1200, setIsLoading3);
    }, 2400);

    return () => {
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);


  return (

    <KeyboardAvoidingView
      style={[stylesProfessionals.Container1, { flex: 1, justifyContent: 'center', marginTop: height * 0.04, backgroundColor: 'black', position: 'absolute' }]}
      behavior={Platform.OS === "ios" ? "padding" : 'height'}
      keyboardVerticalOffset={-230}
    >
      <Animated.View style={{ top: width * 0.04, opacity: fadeInAnim }}>
        <Image
          source={require('../../assets/BarberBackgroundDefault.png')}
          style={{ width: width, height: height, resizeMode: 'cover' }}
        />
      </Animated.View>


      <Animated.View style={{ top: width * 0.04, justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'center', top: -710, width: '100%', height: 1, opacity: fadeInAnim }}>
        <TouchableOpacity style={[stylesProfessionals.ButtonAcess]}>

          <Animated.Text style={[stylesProfessionals.ButtonTextPink3]}>
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          </Animated.Text>

        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={{ top: width * 0.04, justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'center', top: -710, width: '100%', height: 1, opacity: fadeInAnim }}>
        <TouchableOpacity style={[stylesProfessionals.ButtonAcess]}>

          <Animated.Text style={[stylesProfessionals.ButtonTextPink3, { opacity: fadeInAnim }]}>
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          </Animated.Text>

        </TouchableOpacity>
      </Animated.View>


      <Animated.View style={{
        justifyContent: 'center', alignItems: 'center',
        top: -680, opacity: fadeInAnim
      }} >
        {buttonVisible && (
          <TouchableOpacity
            style={[stylesProfessionals.ButtonAcess3]}

          >

            <Animated.Text style={[stylesProfessionals.ButtonTextPink6]}>
              {displayText}

            </Animated.Text>

          </TouchableOpacity>
        )}
      </Animated.View>


      <Animated.View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, opacity: fadeInAnim, top: width * 0.04 }}>
        <TextInput
          style={[stylesProfessionals.TextInput, { width: '83%' }, { height: 40 }, { color: 'black' }]}
          placeholder="Pesquisar pelo nome"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
      </Animated.View>


      <Animated.View style={{ alignItems: 'center', justifyContent: 'flex-start', opacity: fadeInAnim, top: -width * 1.68, left: width * 0.25 }}>

        <TouchableOpacity
          onPress={handleOrderClick} style={stylesProfessionals.ButtonAcess}
        >

          <MaterialCommunityIcons
            name="order-alphabetical-ascending"
            size={25}
            color='purple'
          />

        </TouchableOpacity>

      </Animated.View>

      <Animated.View style={{ alignItems: 'center', justifyContent: 'flex-start', opacity: fadeInAnim, top: -width * 1.68, left: width * 0.35 }}>

        <TouchableOpacity
          onPress={handleOrderClick} style={stylesProfessionals.ButtonAcess}
        >

          <MaterialCommunityIcons
            name="search-web"
            size={25}
            color='purple'
          />

        </TouchableOpacity>

      </Animated.View>


      <Animated.View style={{ alignItems: 'center', opacity: fadeInAnim, width: width, bottom: height * 0.77, maxHeight: height * 0.77 }}>

        <FlatList
          data={ProfessionalsList} // Use ProfessionalsList em vez de ProfessionalsComponentList
          ItemSeparatorComponent={SeparatorItem}
          renderItem={({ item }) => (
            <ProfessionalsComponentList data={item} /> // Passe o objeto 'item' como propriedade para o componente
          )}
          keyExtractor={(item) => item.id.toString()}
        />

      </Animated.View>
      <StatusBar style="dark" />

      <Animated.View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'center', top: -height * 0.8, width: '100%', height: 1, opacity: fadeInAnim }}>
        <TouchableOpacity style={[stylesProfessionals.ButtonAcess]}>

          <Animated.Text style={[stylesProfessionals.ButtonTextPink3, { opacity: fadeInAnim }]}>
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          </Animated.Text>

        </TouchableOpacity>
      </Animated.View>



      <Animated.View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'center', top: -height * 1.52, width: '100%', height: 1, opacity: fadeInAnim }}>
        <TouchableOpacity style={[stylesProfessionals.ButtonAcess]}>

          <Animated.Text style={[stylesProfessionals.ButtonTextPink3, { opacity: fadeInAnim }]}>
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          </Animated.Text>

        </TouchableOpacity>
      </Animated.View>


      <Animated.View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'center', bottom: 26, opacity: fadeInAnim }}>
        <TouchableOpacity style={[stylesProfessionals.ButtonAcess, { shadowColor: '#9400D3' }]}>

          <Animated.Text style={[stylesProfessionals.ButtonTextPink3, { opacity: fadeInOutAnim3 }]}>

          </Animated.Text>

        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={{ top: width * 0.04, justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'center', top: 0, width: '100%', height: 1, opacity: fadeInAnim }}>
        <TouchableOpacity style={[stylesProfessionals.ButtonAcess]}>

          <Animated.Text style={[stylesProfessionals.ButtonTextPink3, { opacity: fadeInOutAnim, shadowColor: '#9400D3' }]}>
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          </Animated.Text>

        </TouchableOpacity>
      </Animated.View>

      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>

      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default ProfessionalsDisplayList;