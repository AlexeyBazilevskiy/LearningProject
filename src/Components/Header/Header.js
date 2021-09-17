import React from 'react'
import { StyledView } from "../../Styles/Styles";
import HeaderIcons from "./HeaderIcons/HeaderIcons";
import HeaderTitles from "./HeaderTitles/HeaderTitles";

const Header = () => {
    return(
        <StyledView paddingVertical={'15px'} borderColor={'gray'} borderBottomWeight={'2px'}>
            <HeaderIcons />
            <HeaderTitles />
        </StyledView>
    )
}

export default Header