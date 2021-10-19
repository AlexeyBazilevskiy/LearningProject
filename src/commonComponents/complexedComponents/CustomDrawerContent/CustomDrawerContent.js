import React from 'react'
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import I18nJs from "react-native-i18n";

const CustomDrawerContent = (props) => {
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={I18nJs.t('close')}
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  )
}

export default CustomDrawerContent