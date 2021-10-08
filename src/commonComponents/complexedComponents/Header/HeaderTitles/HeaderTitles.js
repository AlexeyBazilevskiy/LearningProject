import React from 'react'
import {TouchableOpacity} from 'react-native'
import StyledView from '../../../lowLevelComponents/styledView'
import StyledText from "../../../lowLevelComponents/styledText";

const HeaderIcons = ({headerData: {firstLink, pageTitle, secondLink}}) => {
    return(
        <StyledView flexDirection={'row'} justifyContent={'space-between'}>
            <TouchableOpacity >
                <StyledText color={'blue'} fontWeight={'bold'} fontSize={'16px'}>{firstLink}</StyledText>
            </TouchableOpacity>
            <StyledText fontWeight={'bold'} fontSize={'16px'}>{pageTitle}</StyledText>
            <TouchableOpacity >
                <StyledText color={'blue'} fontWeight={'bold'} fontSize={'16px'}>{secondLink}</StyledText>
            </TouchableOpacity>
        </StyledView>
    )
}

export default HeaderIcons