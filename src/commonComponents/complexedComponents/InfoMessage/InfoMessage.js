import React from 'react'
import StyledView from "../../lowLevelComponents/styledView";
import StyledText from "../../lowLevelComponents/styledText";

const ErrorMessage = ({text, bodyStyles, textColor}) => {
  return(
    <StyledView
      style={bodyStyles}
    >
      <StyledText
        paddingVertical={'5px'}
        textAlign={'center'}
        color={textColor}
        fontWeight={'bold'}
        fontSize={'16px'}
      >
        {text}
      </StyledText>
    </StyledView>
  );
}

export default ErrorMessage;