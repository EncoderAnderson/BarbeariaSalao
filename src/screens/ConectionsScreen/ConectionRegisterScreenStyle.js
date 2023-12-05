import { StyleSheet } from 'react-native';

const stylesConectionRegister = StyleSheet.create({

  Text1: {
    alignItems: "center",
    fontSize: 8

  },

  Container1: {

    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#000",

  },

  ButtonAcess: {
    backgroundColor: 'transparent',
    borderRadius: 25,
    shadowColor: '#ff2ce9', // Cor da sombra neon (mesma cor de fundo)
    shadowOpacity: 1, // Opacidade da sombra ajustada
    shadowRadius: 50, // Raio da sombra ajustado
    elevation: 20, // Elevação (usado para criar sombra no Android)
    paddingVertical: 5, // Espaçamento vertical para tornar o botão visível
    paddingHorizontal: 20, // Espaçamento horizontal para tornar o botão visível

  },

  ButtonAcessImage: {

    borderRadius: 25,
    shadowColor: '#ff2ce9', // Cor da sombra neon (mesma cor de fundo)
    shadowOpacity: 1, // Opacidade da sombra ajustada
    shadowRadius: 50, // Raio da sombra ajustado
    elevation: 20, // Elevação (usado para criar sombra no Android)
    paddingVertical: 60, // Espaçamento vertical para tornar o botão visível
    paddingHorizontal: 60, // Espaçamento horizontal para tornar o botão visível

  },

  ButtonTextPink: {
    color: 'white',
    fontSize: 33,
    fontWeight: 'bold',
    textShadowColor: '#ff2ce9', // Cor do efeito neon (mesma cor de fundo)
    textShadowOffset: { width: 0, height: 0 }, // Posição do efeito neon (não desloca a sombra)
    textShadowRadius: 10, // Raio do efeito neon
    alignSelf: 'center',
    fontFamily: 'Roboto',
  },

  ButtonStandard1: {
    backgroundColor: 'transparent',
    borderRadius: 25,
    shadowColor: '#ff2ce9', // Cor da sombra neon (mesma cor de fundo)
    shadowOpacity: 3, // Opacidade da sombra ajustada
    shadowRadius: 50, // Raio da sombra ajustado
    elevation: 4, // Elevação (usado para criar sombra no Android)
    paddingVertical: 1, // Espaçamento vertical para tornar o botão visível
    paddingHorizontal: 1, // Espaçamento horizontal para tornar o botão visível
    alignSelf: 'center',
    borderWidth: 2, // Aumente esse valor para deixar a borda mais grossa
  },

  ButtonStandard2: {

    backgroundColor: 'transparent',
    borderRadius: 20,
    shadowColor: '#ff2ce9', // Cor da sombra neon (mesma cor de fundo)
    shadowOpacity: 1, // Opacidade da sombra ajustada
    shadowRadius: 50, // Raio da sombra ajustado
    elevation: 20, // Elevação (usado para criar sombra no Android)
    paddingVertical: 5, // Espaçamento vertical para tornar o botão visível
    paddingHorizontal: 20, // Espaçamento horizontal para tornar o botão visível
    marginTop: 100,
    shadowColor: 'rgba(255, 0, 255, 0.75)', // Cor da sombra do neon
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10, // Opacidade da sombra
    shadowRadius: 50, // Tamanho da sombra

  },

  ButtonPurpleText: {
    justifyContent: 'flex-end',
    paddingVertical: '10',
    paddingHorizontal: '30',
    alignSelf: 'center',
    backgroundColor: 'purple',
    borderRadius: 20,

  },

  ButtonPinkText: {

  },
  ImageBackgroundLoading:
  {
    flex: 1,
  },

  BackgroundImage: {
    position: 'absolute',
    borderRadius: 100,
    borderWidth: 0.5, // Largura da borda
    borderColor: "rgba(255, 0, 255, 0.75)", // Cor da borda neon
    shadowColor: 'rgba(255, 0, 255, 0.75)', // Cor da sombra neon
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1, // Opacidade da sombra
    shadowRadius: 10, // Tamanho da sombra
    padding: 10


  },



  TextInput: {
    width: '100%',
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 0,
    fontSize: 20,
    color: "#333",
    borderWidth: 0.5, // Largura da borda
    borderColor: "rgba(255, 0, 255, 0.75)", // Cor da borda neon
    shadowColor: 'rgba(255, 0, 255, 0.75)', // Cor da sombra neon
    shadowOffset: { width: 30, height: 30 },
    shadowOpacity: 1, // Opacidade da sombra
    shadowRadius: 20, // Tamanho da sombra
    marginTop: -1300,
    elevation: 20,


  },

  ButtonAcessInitialScreen: {


    borderWidth: 0.5, // Largura da borda
    borderColor: "rgba(255, 0, 255, 0.75)", // Cor da borda neon
    backgroundColor: 'transparent',
    marginTop: -595,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 25,


    shadowColor: '#ff2ce9', // Cor da sombra neon (mesma cor de fundo)
    shadowOpacity: 1, // Opacidade da sombra ajustada
    shadowRadius: 50, // Raio da sombra ajustado
    elevation: 20, // Elevação (usado para criar sombra no Android)

  },

  ButtonXDesignBeauty: {

    borderWidth: 0.5, // Largura da borda
    borderColor: "rgba(255, 0, 255, 0.75)", // Cor da borda neon
    backgroundColor: 'transparent',
    marginTop: -595,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 25,
    borderWidth: 0,



    shadowColor: '#ff2ce9', // Cor da sombra neon (mesma cor de fundo)
    shadowOpacity: 1, // Opacidade da sombra ajustada
    shadowRadius: 50, // Raio da sombra ajustado
    elevation: 20, // Elevação (usado para criar sombra no Android)

  },

  ButtonTextPinkDesign: {
    fontSize: 33,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: '#ff2ce9', // Cor do efeito neon (mesma cor de fundo)
    textShadowOffset: { width: 0, height: 0 }, // Posição do efeito neon (não desloca a sombra)
    textShadowRadius: 10, // Raio do efeito neon

    fontFamily: 'Roboto',
  },

  ButtonAcessRegisterScreen: {


    borderWidth: 0.5, // Largura da borda
    borderColor: "rgba(255, 0, 255, 0.75)", // Cor da borda neon
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 25,
    shadowColor: '#ff2ce9', // Cor da sombra neon (mesma cor de fundo)
    shadowOpacity: 1, // Opacidade da sombra ajustada
    shadowRadius: 50, // Raio da sombra ajustado
    elevation: 20, // Elevação (usado para criar sombra no Android)
    position: 'absolute',
    bottom: 115


  },

  ButtonTextPink2: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: '#ff2ce9', // Cor do efeito neon (mesma cor de fundo)
    textShadowOffset: { width: 0, height: 0 }, // Posição do efeito neon (não desloca a sombra)
    textShadowRadius: 10, // Raio do efeito neon
    alignSelf: 'center',
    fontFamily: 'Roboto',
  },


  contentAlert: {
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    bottom: 200

  },

  warningAlert: {
    color: 'white',
    position: 'absolute',
    fontWeight: 'bold',
    textShadowColor: '#ff2ce9', // Cor do efeito neon (mesma cor de fundo)
    textShadowOffset: { width: 0, height: 0 }, // Posição do efeito neon (não desloca a sombra)
    textShadowRadius: 10, // Raio do efeito neon
    alignSelf: 'center',
    fontFamily: 'Roboto',
    justifyContent: 'center',
    shadowOffset: { width: 30, height: 30 },
    shadowOpacity: 1, // Opacidade da sombra
    shadowRadius: 20, // Tamanho da sombra
    elevation: 20,


  },



});

export default stylesConectionRegister;