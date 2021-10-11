import React from 'react'
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";

const CustomDrawerContent = (props) => {
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  )
}

export default CustomDrawerContent