import React from 'react'
import ListOfArray from "../ListOfArray/ListOfArray";
import CustomDrawerItem from "./CustomDrawerItem/CustomDrawerItem";
import ICRight from '../../../assets/icons/right-arrow.svg'
import {SafeAreaView} from "react-native-safe-area-context";

const CustomDrawerContent = (props) => {
  const history = props.state.history
  return(
    <SafeAreaView flex={1} backgroundColor={'whitesmoke'}>
      <ListOfArray
        data={props.state.routes}
        RenderItem={CustomDrawerItem}
        info={{
          Icon: ICRight,
          navigation: props.navigation,
          current: history.length < 2 ? history[props.state.history.length - 1] : history[props.state.history.length - 2]}}
      />
    </SafeAreaView>
  )
}

export default CustomDrawerContent