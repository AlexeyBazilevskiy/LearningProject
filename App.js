import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GoodBasket from "./src/pages/GoodBasket/GoodBasket";
import CustomDrawerContent from "./src/commonComponents/complexedComponents/CustomDrawerContent/CustomDrawerContent";
import SignaturePage from "./src/pages/SignaturePage/SignaturePage";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props}/>}
      >
        <Drawer.Screen name={'Signature Page'} component={SignaturePage} />

        <Drawer.Screen
          name="Good Basked"
          component={GoodBasket}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;