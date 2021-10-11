import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GoodBasket from "./src/pages/GoodBasket/GoodBasket";
import Login from "./src/pages/Login/Login";
import CustomDrawerContent from "./src/commonComponents/complexedComponents/CustomDrawerContent/CustomDrawerContent";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="GoodBasked" component={GoodBasket} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
};

export default App;
