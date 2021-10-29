import React from 'react'
import StyledView from '../../../lowLevelComponents/styledView'
import StyledText from "../../../lowLevelComponents/styledText";
import Signal from '../../../../assets/icons/signal.svg'
import Bluetooth from '../../../../assets/icons/bluetooth.svg'
import Cloud from '../../../../assets/icons/cloud-computing.svg'
import { useTheme } from '@react-navigation/native';

const HeaderIcons = () => {
  const { colors } = useTheme();

  return(
        <StyledView flexDirection={'row'} justifyContent={'space-between'} >
            <StyledView flexDirection={'row'}>
                <Bluetooth width={40} height={40} fill={colors.text} />
                <StyledText fontSize={'20px'} alignSelf={'center'} color={colors.text}>100%</StyledText>
            </StyledView>
            <Signal width={40} height={40} marginRight={50} fill={colors.text}/>
            <Cloud width={40} height={40} fill={colors.text}/>
        </StyledView>
    )
}

export default HeaderIcons