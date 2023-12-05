
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Routes from '../../routes';
import LoginScreen from '../LoginScreen/LoginScreen';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { StatusBar, ScrollView, View } from 'react-native';


const auth = getAuth();
export default function InitialScreen() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1, position: 'relative' }} >

      {user ?
        <Routes />

        :
        <LoginScreen />}

    </SafeAreaView>

  );


}

