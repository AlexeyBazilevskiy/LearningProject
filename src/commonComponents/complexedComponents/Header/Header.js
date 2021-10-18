import React from 'react'
import StyledView from "../../lowLevelComponents/styledView";
import HeaderIcons from "./HeaderIcons/HeaderIcons";
import HeaderTitles from "./HeaderTitles/HeaderTitles";

const Header = ({headerData}) => {
    return(
        <StyledView paddingVertical={'15px'} borderColor={'gray'} backgroundColor={'#013555'} borderBottomWeight={'2px'}>
            <HeaderIcons />
            <HeaderTitles headerData={headerData}/>
        </StyledView>
    )
}

export default Header