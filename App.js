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
import CameraPage from "./src/pages/CameraPage/CameraPage";
import {Provider, useDispatch} from "react-redux";
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

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props}/>}
          >
            <Drawer.Screen name={I18nJs.t('qrCodePage')} component={QrCodeScannerPage} options={{headerShown: false}}/>
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