import React from 'react'
import StyledView from '../../../lowLevelComponents/styledView'
import StyledText from "../../../lowLevelComponents/styledText";
import StyledTouchableOpacity from "../../../lowLevelComponents/styledTouchableOpacity";

const HeaderIcons = ({headerData: {firstLink, pageTitle, secondLink}}) => {
    return(
        <StyledView
          flexDirection={'row'}
          justifyContent={'space-between'}
          paddingTop={'10px'}
          marginTop={'5px'}
          borderTopWidth={'1px'}
          borderColor={'lightgray'}
        >
            <StyledTouchableOpacity >
                <StyledText color={'blue'} fontWeight={'bold'} fontSize={'16px'}>{firstLink}</StyledText>
            </StyledTouchableOpacity>
            <StyledText fontWeight={'bold'} fontSize={'16px'}>{pageTitle}</StyledText>
            <StyledTouchableOpacity >
                <StyledText color={'blue'} fontWeight={'bold'} fontSize={'16px'}>{secondLink}</StyledText>
            </StyledTouchableOpacity>
        </StyledView>
    )
}

export default HeaderIcons