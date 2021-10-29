import React from 'react';
import {useColorScheme} from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GoodBasket from "./src/pages/GoodBasket/GoodBasket";
import CustomDrawerContent from "./src/commonComponents/complexedComponents/CustomDrawerContent/CustomDrawerContent";
import SignaturePage from "./src/pages/SignaturePage/SignaturePage";
import ModalPage from "./src/pages/ModalPage/ModalPage";
import WebViewPage from "./src/pages/WebViewPage/WebViewPage";
import I18nJs from "./src/language/strings";
import MapPage from "./src/pages/MapPage/MapPage";
import CameraPage from "./src/pages/CameraPage/CameraPage";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from './src/reducers/rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react'
import FingerPrintScannerPage from "./src/pages/FingerPrintScannerPage/FingerPrintScannerPage";
import MusicPlayerPage from "./src/pages/MusicPlayerPage/MusicPlayerPage";
import QrCodeScannerPage from "./src/pages/QrCodeScanerPage/QrCodeScannerPage";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    headerColor: 'lightgray',
    tableBorder: 'lightgray',
    tableText: 'grey',
    itemColor: 'lightgray',
    blackIcon: 'black',
    musicItemBackground: '#17214a',
    musicPlayerColor: '#101736'
  },
};

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
    headerColor: 'darkgray',
    tableBorder: 'lightgray',
    tableText: 'whitesmoke',
    itemColor: 'lightgray',
    blackIcon: 'white',
    musicItemBackground: 'black',
    musicPlayerColor: '#000'
  },
};

const Drawer = createDrawerNavigator();

const App = () => {
  const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : MyTheme}>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props}/>}
          >
            <Drawer.Screen name={I18nJs.t('qrCodePage')} component={QrCodeScannerPage}
                           // options={{headerShown: false}}
            />
            <Drawer.Screen name={I18nJs.t('musicPlayerHeader')} component={MusicPlayerPage}/>
            <Drawer.Screen name={I18nJs.t('fingerPrintHeader')} component={FingerPrintScannerPage} />
            <Drawer.Screen name={I18nJs.t('cameraHeader')} component={CameraPage} />
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
      </PersistGate>
    </Provider>
  );
};

export default App;