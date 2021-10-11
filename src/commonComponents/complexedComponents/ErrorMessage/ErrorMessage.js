import React from 'react'
import StyledView from "../../lowLevelComponents/styledView";
import StyledText from "../../lowLevelComponents/styledText";

const ErrorMessage = ({text}) => {
  return(
    <StyledView
      backgroundColor={'rgba(255, 0, 0, .7)'}
      borderWidth={'1px'}
      borderColor={'darkred'}
      marginVertical={'10px'}
    >
      <StyledText
        paddingVertical={'5px'}
        textAlign={'center'}
        color={'#fff'}
        fontWeight={'bold'}
        fontSize={'16px'}
      >
        {text}
      </StyledText>
    </StyledView>
  );
}

export default ErrorMessage;