import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// IMPORT ROUTE
import Login from 'routes/Auth/Login';
import ROUTES from 'constants/routes';

const {Navigator, Screen} = createStackNavigator();

const AuthStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.AUTH_LOGIN}>
      {/* STACK ENTRY */}
      <Screen name={ROUTES.AUTH_LOGIN} component={Login} />
    </Navigator>
  );
};

export default AuthStack;
