import React, { useState, useEffect } from 'react';
import { Button, Image, View, TouchableOpacity } from 'react-native';
import { Animated } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import stylesImagePicker from './ImagePickerStyle'

export default function ImagePickerExample() {
  const [Avatar, setAvatar] = useState(null);
  const fadeInOutAnim = useState(new Animated.Value(0))[0];

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <View style={[{ position: 'relative' }, { justifyContent: 'center' }, { alignSelf: 'center' }, { top: 170 }]}>
      <TouchableOpacity
        title="Selecione uma foto para seu Perfil"
        style={[stylesImagePicker.ButtonXDesignBeauty, { position: 'relative' }, { justifyContent: 'center' }, { alignSelf: 'center' }]}
        onPress={pickImage}
      >
        {Avatar && <Image source={{ uri: Avatar }} style={{ width: 200, height: 200 }} />}

        <Animated.Text style={[stylesImagePicker.ButtonTextPink2, { opacity: fadeInOutAnim }]}>
          Selecionar Imagem
        </Animated.Text>
      </TouchableOpacity>

    </View>

  );
}
