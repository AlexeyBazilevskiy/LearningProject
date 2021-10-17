import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
} from 'react-native';
import GoodBasket from "./src/pages/GoodBasket/GoodBasket";

const App = () => {

  return (
      <SafeAreaView flex={1}>
        <GoodBasket />
      </SafeAreaView>
  );
};

export default App;
