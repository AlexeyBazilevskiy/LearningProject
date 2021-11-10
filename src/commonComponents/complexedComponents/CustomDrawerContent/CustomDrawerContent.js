import React from 'react';
import ListOfArray from '../ListOfArray/ListOfArray';
import CustomDrawerItem from './CustomDrawerItem/CustomDrawerItem';
import ICRight from '../../../assets/icons/right-arrow.svg';
import {SafeAreaView} from 'react-native-safe-area-context';

const CustomDrawerContent = ({state: {history, routes}, navigation}) => {
  return (
    <SafeAreaView flex={1} backgroundColor={'whitesmoke'} marginTop={10}>
      <ListOfArray
        data={routes}
        RenderItem={CustomDrawerItem}
        info={{
          Icon: ICRight,
          navigation,
          current:
            history.length < 2
              ? history[history.length - 1]
              : history[history.length - 2],
        }}
      />
    </SafeAreaView>
  );
};

export default CustomDrawerContent;
