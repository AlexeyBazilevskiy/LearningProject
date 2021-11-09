import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GoodBasket from "./src/pages/GoodBasket/GoodBasket";
import CustomDrawerContent from "./src/commonComponents/complexedComponents/CustomDrawerContent/CustomDrawerContent";
import SignaturePage from "./src/pages/SignaturePage/SignaturePage";
import ModalPage from "./src/pages/ModalPage/ModalPage";
import WebViewPage from "./src/pages/WebViewPage/WebViewPage";
import I18nJs from "./src/language/strings";
import MapPage from "./src/pages/MapPage/MapPage";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props}/>}
      >
        <Drawer.Screen name={I18nJs.t('mapHeader')} component={MapPage} />
        <Drawer.Screen name={I18nJs.t('webViewHeader')} component={WebViewPage} />
        <Drawer.Screen name={I18nJs.t('modalHeader')} component={ModalPage} />
        <Drawer.Screen name={I18nJs.t('signatureHeader')} component={SignaturePage} />
        <Drawer.Screen
          name={I18nJs.t('goodBasketHeader')}
          component={GoodBasket}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;