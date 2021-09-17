import React from 'react'
import Bluetooth from '../../../icons/bluetooth.svg'
import Signal from '../../../icons/signal.svg'
import Cloud from '../../../icons/cloud-computing.svg'
import {StyledView, StyledText} from "../../../Styles/Styles";

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