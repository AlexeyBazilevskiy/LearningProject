import React from 'react'
import StyledView from "../../lowLevelComponents/styledView";
import HeaderIcons from "./HeaderIcons/HeaderIcons";
import HeaderTitles from "./HeaderTitles/HeaderTitles";
import {useTheme} from "@react-navigation/native";

const Header = ({headerData}) => {
  const {colors} = useTheme()
  return(
    <StyledView paddingVertical={'15px'} borderColor={'gray'} backgroundColor={colors.headerColor} borderBottomWeight={'2px'}>
      <HeaderIcons />
      <HeaderTitles headerData={headerData}/>
    </StyledView>
  )
}

export default Header