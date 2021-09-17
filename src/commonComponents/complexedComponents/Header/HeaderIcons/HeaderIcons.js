import React from 'react'
import Bluetooth from '../../../assets/icons/bluetooth.svg'
import Signal from '../../../assets/icons/signal.svg'
import Cloud from '../../../assets/icons/cloud-computing.svg'
import StyledView from '../../lowLevelComponents/styledView'
import StyledText from "../../lowLevelComponents/styledText";

const HeaderIcons = () => {
    return(
        <StyledView flexDirection={'row'} justifyContent={'space-between'} >
            <StyledView flexDirection={'row'}>
                <Bluetooth width={40} height={40} fill={'#000'} />
                <StyledText>100%</StyledText>
            </StyledView>
            <Signal width={40} height={40} marginRight={40} fill={'#000'}/>
            <Cloud width={40} height={40} fill={'#000'}/>
        </StyledView>
    )
}

export default HeaderIcons