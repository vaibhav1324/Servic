import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';

import Auth from './Auth';
import Main from './Main';

const SplashScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f1f1f1',
    }}>
    <Text>SplashScreen</Text>
  </View>
);

const Routes = () => {
  const isUser = true;
  const [isSplashScreen, setIsSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreen(false);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      {isSplashScreen ? <SplashScreen /> : !isUser ? <Auth /> : <Main />}
    </NavigationContainer>
  );
};

export default Routes;
