import React from 'react'
import StyledTouchableOpacity from "../../lowLevelComponents/styledTouchableOpacity";
import StyledText from "../../lowLevelComponents/styledText";

const LinkText = ({text, marginTop, textAlign, onPress}) => {
  return(
    <StyledTouchableOpacity
      onPress={onPress}
    >
      <StyledText
        color={'#2a2a84'}
        marginTop={marginTop}
        textAlign={textAlign}
      >
        {text}
      </StyledText>
    </StyledTouchableOpacity>
  )
}

export default LinkText