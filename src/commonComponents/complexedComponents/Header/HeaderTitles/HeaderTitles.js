import React from 'react'
import StyledView from '../../lowLevelComponents/styledView'
import StyledText from "../../lowLevelComponents/styledText";

const HeaderIcons = () => {
    return(
        <StyledView flexDirection={'row'} justifyContent={'space-between'}>
            <StyledText color={'blue'} fontWeight={'bold'} fontSize={'16px'}>Cancel</StyledText>
            <StyledText fontWeight={'bold'} fontSize={'16px'}>Articles In Carton</StyledText>
            <StyledText color={'blue'} fontWeight={'bold'} fontSize={'16px'}>Confirm</StyledText>
        </StyledView>
    )
}

export default HeaderIcons