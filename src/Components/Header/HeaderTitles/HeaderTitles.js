import React from 'react'

import {StyledView, StyledText} from "../../../Styles/Styles";

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