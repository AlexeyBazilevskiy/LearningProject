import React from 'react'
import {TouchableOpacity} from 'react-native'
import StyledView from '../../../lowLevelComponents/styledView'
import StyledText from "../../../lowLevelComponents/styledText";
import { useTheme } from '@react-navigation/native';

const HeaderIcons = ({headerData: {firstLink, pageTitle, secondLink}}) => {
  const {colors} = useTheme()
    return(
        <StyledView flexDirection={'row'} justifyContent={'space-between'}>
            <TouchableOpacity >
                <StyledText color={colors.text} fontWeight={'bold'} fontSize={'16px'}>{firstLink}</StyledText>
            </TouchableOpacity>
            <StyledText fontWeight={'bold'} color={colors.text} fontSize={'16px'}>{pageTitle}</StyledText>
            <TouchableOpacity >
                <StyledText color={colors.text} fontWeight={'bold'} fontSize={'16px'}>{secondLink}</StyledText>
            </TouchableOpacity>
        </StyledView>
    )
}

export default HeaderIcons