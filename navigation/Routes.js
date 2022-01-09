import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('token').then((data) => {
      console.log('data: ', data);
      if (data !== undefined && data.length > 0) {
        setUser(true);
      }
    });
  }, []);

  // useEffect(() => {
  //   console.log('user: ', user);
  // }, user);
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
