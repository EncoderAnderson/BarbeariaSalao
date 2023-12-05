import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  Text1: {
    alignItems: "center",
    fontSize: 8

  },

  Container1: {

    flex: 1,

    backgroundColor: "#000",
    justifyContent: 'center'

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
    marginTop: -50,
    alignSelf: 'center',
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

  ImageBackgroundLoading:
  {
    flex: 1,



  },
  ButtonXDesignBeauty: {

    borderWidth: 0.5, // Largura da borda
    borderColor: '#9400D3', // Cor da borda neon
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

});

export default styles;