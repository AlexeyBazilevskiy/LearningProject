import React from 'react'
import StyledView from "../../../../commonComponents/lowLevelComponents/styledView";
import StyledText from "../../../../commonComponents/lowLevelComponents/styledText";
import ICCheckmark from '../../../../assets/icons/checkmark.svg'

const CheckPassElem = ({text, isTrue}) => {
  // console.log(isTrue)
  return(
    <StyledView
      flexDirection={'row'}
      marginTop={'10px'}
    >
      { !isTrue ?
        <StyledView
          backgroundColor={'gray'}
          width={'10px'}
          height={'10px'}
          borderRadius={'5px'}
          alignSelf={'center'}
          marginRight={'5px'}
        /> :
        <ICCheckmark width={10} height={10} alignSelf={'center'} marginRight={5}/>
      }
      <StyledText>{text}</StyledText>
    </StyledView>
  )
}

export default CheckPassElem