import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Modal, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import DatePicker from 'react-native-modern-datepicker';
import { BlurView } from 'expo-blur';
import stylesProfile from '../screens/ProfileScreen/ProfileScreenStyle';
import React from 'react';


export default Calendar = () => {

  const today = new Date();
  const { height, width } = Dimensions.get("window");
  const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'DD/MM/YYYY')
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('01/09/2023');
  const fadeInOutAnim = useState(new Animated.Value(0))[0];
  const [displayText, setDisplayText] = useState("Clique aqui");
  const [isLoading, setIsLoading] = useState(false);
  const [fadeInAnim] = useState(new Animated.Value(0));



  const handleOnPress = () => {
    setOpen(!open);
  }

  const handleChange = (propDate) => {
    setDate(!propDate)

  }


  const handleCloseModal = () => {
    setOpen(false);
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
    const toggleText = () => {
      setIsLoading(true);

      Animated.timing(fadeInOutAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start(() => {
        setDisplayText(
          displayText === "" ? "Clique aqui" : ""
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


    return () => clearInterval(interval);
  }, [displayText, fadeInOutAnim]);





  return (

    <Animated.View style={[stylesCalendar.container1, { borderRadius: 25, opacity: fadeInAnim }]}>

      <View style={{ justifyContent: 'flex-start', alignItems: 'center', width: width * 0.83, height: height * 0.105, flexDirection: 'column' }}>

        <Text style={[stylesProfile.ButtonTextPink3, { alignItems: 'center', alignSelf: 'center' }]}>
          Você pode verificar os dias


        </Text>
        <Text style={[stylesProfile.ButtonTextPink3, { alignItems: 'center', alignSelf: 'center' }]}>

          marcados ou agendar um

        </Text>
        <Text style={[stylesProfile.ButtonTextPink3, { alignItems: 'center', alignSelf: 'center' }]}>


          novo dia para você!
        </Text>
        <Text style={[stylesProfile.ButtonTextPink3, { alignItems: 'center', alignSelf: 'center' }]}>



        </Text>



      </View>



      <Animated.View style={{ opacity: fadeInOutAnim }} >

        <TouchableOpacity
          style={[stylesProfile.ButtonAcess, { alignContent: 'flex-start', alignSelf: 'center', paddingVertical: 0.01 }]}
          onPress={handleOnPress}>
          <Animated.Text style={[stylesProfile.ButtonTextPink5, { top: height * 0.072 }]}>
            Clique aqui
          </Animated.Text>
          <Animated.Text style={[stylesProfile.ButtonTextPink5, { top: height * 0.072 }]}>
            ❤
          </Animated.Text>
        </TouchableOpacity>

      </Animated.View>

      <Modal
        animationType='slide'
        transparent={true}
        visible={open}
      >
        <View style={stylesCalendar.centeredView}>
          <BlurView style={stylesCalendar.ModalStyle}>
            <DatePicker
              mode='calendar'
              minimumDate={startDate}
              selected={date}
              onDateChange={handleChange}
            />
          </BlurView>

        </View>

      </Modal>
    </Animated.View>


  );
}


const stylesCalendar = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center'
  },
  ModalStyle: {
    maring: 20,
    backgroundColor: 'black',
    width: '83%',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#9400D3',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: -5,



  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

});


