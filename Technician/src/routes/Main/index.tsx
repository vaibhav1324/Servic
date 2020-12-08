import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// IMPORT ROUTE
import Dashboard from 'routes/Main/Dashboard';
import ROUTES from 'constants/routes';

const {Navigator, Screen} = createStackNavigator();

const MainStack = () => {
  // all Main-routes go here.
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="">
      {/* STACK ENTRY */}
      <Screen name={ROUTES.MAIN_DASHBOARD} component={Dashboard} />
    </Navigator>
  );
};

export default MainStack;
