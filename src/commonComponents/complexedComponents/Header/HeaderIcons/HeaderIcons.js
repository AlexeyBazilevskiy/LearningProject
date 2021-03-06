import React from 'react'
import StyledView from '../../../lowLevelComponents/styledView'
import StyledText from "../../../lowLevelComponents/styledText";
import Signal from '../../../../assets/icons/signal.svg'
import Bluetooth from '../../../../assets/icons/bluetooth.svg'
import Cloud from '../../../../assets/icons/cloud-computing.svg'

const HeaderIcons = () => {
    return(
        <StyledView flexDirection={'row'} justifyContent={'space-between'} >
            <StyledView flexDirection={'row'}>
                <Bluetooth width={40} height={40} fill={'#000'} />
                <StyledText fontSize={'20px'} alignSelf={'center'} >100%</StyledText>
            </StyledView>
            <Signal width={40} height={40} marginRight={50} fill={'#000'}/>
            <Cloud width={40} height={40} fill={'#000'}/>
        </StyledView>
    )
}

export default HeaderIcons