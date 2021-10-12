import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GoodBasket from "./src/pages/GoodBasket/GoodBasket";
import CustomDrawerContent from "./src/commonComponents/complexedComponents/CustomDrawerContent/CustomDrawerContent";
import Chard from "./src/pages/Chard/Chard";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="GoodBasked" component={GoodBasket} />
        <Drawer.Screen name="Chard" component={Chard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;