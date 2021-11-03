import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GoodBasket from "./src/pages/GoodBasket/GoodBasket";
import CustomDrawerContent from "./src/commonComponents/complexedComponents/CustomDrawerContent/CustomDrawerContent";
import ScanCount from "./src/pages/ScanCount/ScanCount";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props}/>}
      >
        <Drawer.Screen name={'Sacn'} component={ScanCount} options={{headerShown: false}} />

        <Drawer.Screen
          name="GoodBasked"
          component={GoodBasket}
          options={{headerShown: false}}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;