import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GoodBasket from "./src/pages/GoodBasket/GoodBasket";
import CustomDrawerContent from "./src/commonComponents/complexedComponents/CustomDrawerContent/CustomDrawerContent";
import SignaturePage from "./src/pages/SignaturePage/SignaturePage";
import ModalPage from "./src/pages/ModalPage/ModalPage";
import WebViewPage from "./src/pages/WebViewPage/WebViewPage";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props}/>}
      >
        <Drawer.Screen name={'WebView page'} component={WebViewPage} />
        <Drawer.Screen name={'Modal page'} component={ModalPage} />
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