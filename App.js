import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Header from "./src/Components/Header/Header";
import GoodBasket from "./src/Page/GoodBasket/GoodBasket";

const App = () => {
  return (
      <SafeAreaView flex={1}>
        <Header />
        <GoodBasket />
      </SafeAreaView>
  );
};

export default App;
