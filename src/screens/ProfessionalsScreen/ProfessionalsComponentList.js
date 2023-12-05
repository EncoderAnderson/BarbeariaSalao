import { View, Text, TouchableOpacity, Image, Animated, Dimensions } from 'react-native';
import stylesProfessionals from './ProfessionalsScreenStyle';
import { withDecay } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import { SeparatorItem } from './SeparatorItem';
import { SeparatorItem2 } from './SeparatorItem2';
import { StatusBar } from 'react-native';


const AndersonImage = require('../../assets/Anderson.png');
const VictorImage = require('../../assets/Victor.png');
const BrunoImage = require('../../assets/Bruno.png');
const KawanImage = require('../../assets/Kawan.png');
const JulioImage = require('../../assets/Julio.png');
const LeandroImage = require('../../assets/Leandro.png');
const NathanImage = require('../../assets/Nathan.png');
const NadiaImage = require('../../assets/Nadia.png');
const ElinarImage = require('../../assets/Elinar.png');
const JennyImage = require('../../assets/Jenny.png')
const LilianImage = require('../../assets/Lilian.png')
const GabsImage = require('../../assets/Gabs.png')
const KarolImage = require('../../assets/Karol.png')
const { width, height } = Dimensions.get("window");


export const ProfessionalsList = [

  {
    id: "1",
    name: 'Anderson',
    cel: "11 953516421",
    avatar: AndersonImage,
    local: "Salão",
    time: "09:00 - 18:00"
  },
  {
    id: '2',
    name: "Victor",
    cel: "11 955464235",
    avatar: VictorImage,
    local: "Residencial",
    time: "12:00 - 17:00"
  },
  {
    id: '3',
    name: 'Bruno',
    cel: "11 953516421",
    avatar: BrunoImage,
    local: "Barbearia",
    time: "10:00 - 15:00"
  },
  {
    id: '4',
    name: 'Kawan',
    cel: "11 953516421",
    avatar: KawanImage,
    local: "Residencial",
    time: "12:00 - 18:00"
  },
  {
    id: '5',
    name: 'Júlio',
    cel: "11 953516421",
    avatar: JulioImage,
    local: "Residencial",
    time: "12:30 - 17:00"
  },
  {
    id: '6',
    name: 'Leandro',
    cel: "11 953516421",
    avatar: LeandroImage,
    local: "Barbearia",
    time: "09:00 - 18:00"
  },
  {
    id: '7',
    name: 'Nathan',
    cel: "11 953516421",
    avatar: NathanImage,
    local: "Residencial",
    time: "10:00 - 18:00"
  },
  {
    id: '8',
    name: 'Nádia',
    cel: "11 953516421",
    avatar: NadiaImage,
    local: "Salão",
    time: "12:30 - 20:00"
  },
  {
    id: '9',
    name: 'Elinar',
    cel: "11 953516421",
    avatar: ElinarImage,
    local: "Salão",
    time: "10:00 - 20:00"
  },
  {
    id: '10',
    name: 'Jenny',
    cel: "11 953516421",
    avatar: JennyImage,
    local: "Salão",
    time: "12:00 - 17:00"
  },
  {
    id: '11',
    name: 'Lilian',
    cel: "11 953516421",
    avatar: LilianImage,
    local: "Residencial",
    time: "12:00 - 20:00"
  },
  {
    id: '12',
    name: 'Gabs',
    cel: "11 953516421",
    avatar: GabsImage,
    local: "Barbearia",
    time: "09:00 - 20:00"
  },
  {
    id: '13',
    name: 'Karol',
    cel: "11 953516421",
    avatar: KarolImage,
    local: "Residencial",
    time: "10:00 - 18:00"
  },
]

const ProfessionalsComponentList = ({ data }) => {
  const fadeInOutAnim = useState(new Animated.Value(0))[0];
  const [displayText, setDisplayText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [displayText2, setDisplayText2] = useState("");
  const [fadeInAnim] = useState(new Animated.Value(0));

  const [botaoComFundo, setBotaoComFundo] = useState(true);



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



    const interval3 = setInterval(() => {
      toggleText(fadeInOutAnim, setDisplayText, "Cabeleleiras", 2400, setIsLoading);
    },);

    return () => {

      clearInterval(interval3);
    };
  }, []);

  const alternarBotao = () => {
    setBotaoComFundo(!botaoComFundo);
  };

  return (
    <>
      <Animated.View style={{ width: width, alignItems: 'center', flexDirection: 'column', marginTop: height * 0.05, height: height * 0.14, justifyContent: 'center', top: height * 0.05 }}>
        <Animated.View style={{ justifyContent: 'center', flexDirection: 'column' }}>
          <TouchableOpacity>
            <Image
              source={data.avatar}
              style={[stylesProfessionals.itemPhoto, { top: height * 0.04, right: width * 0.18, width: 100, height: 100, borderRadius: 100, borderWidth: 1, borderColor: 'black', marginRight: width * 0.2 }]} />

            <View style={[stylesProfessionals.itemInfo, { flexDirection: 'column', alignContent: 'center', bottom: height * 0.06, marginTop: height * 0.03 }]}>

              <TouchableOpacity style={stylesProfessionals.ButtonAcess3}>
                <Animated.Text style={[stylesProfessionals.ButtonTextPink5, { opacity: fadeInOutAnim }]}>{data.name} </Animated.Text>
              </TouchableOpacity>

              <Text style={stylesProfessionals.ButtonTextPink7}>{data.time} </Text>
              <Text style={stylesProfessionals.ButtonTextPink7}> ✄ </Text>
              <Text style={stylesProfessionals.ButtonTextPink7}>{data.local} </Text>


            </View>
          </TouchableOpacity>

          <Animated.View>

            <Animated.View style={{ top: -height * 0.18, left: width * 0.4, alignItems: 'flex-start', marginRight: width * 0.2 }}>
              <TouchableOpacity style={stylesProfessionals.ButtonAcess4}>
                <MaterialCommunityIcons
                  name="card-account-details-star"
                  size={25}
                  color='green'
                />
              </TouchableOpacity>
            </Animated.View>


            <Animated.View style={{ top: -height * 0.16, left: width * 0.4, alignItems: 'flex-start' }}>
              <TouchableOpacity style={stylesProfessionals.ButtonAcess4}>
                <MaterialCommunityIcons
                  name="whatsapp"
                  size={25}
                  color='green'
                />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{ top: -height * 0.24, left: width * 0.49, alignItems: 'flex-start' }}>
              <TouchableOpacity

                style={stylesProfessionals.ButtonAcess4}
                onPress={alternarBotao}
              >

                <MaterialCommunityIcons
                  name={botaoComFundo ? 'star-plus-outline' : "star-check"}
                  size={25}
                  color='yellow'
                />
              </TouchableOpacity>
            </Animated.View>


          </Animated.View>


        </Animated.View>
      </Animated.View>
      <Animated.View style={{ top: width * 0.04, justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'center', width: '100%', height: 1, opacity: fadeInAnim }}>
        <TouchableOpacity style={[stylesProfessionals.ButtonAcess3]}>

          <Animated.Text style={[stylesProfessionals.ButtonTextPink3]}>
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          </Animated.Text>

        </TouchableOpacity>
      </Animated.View>
      <SeparatorItem />
      <SeparatorItem2 />

    </>
  )
}
export default ProfessionalsComponentList;
