import React from 'react'
import StyledTouchableOpacity from "../../lowLevelComponents/styledTouchableOpacity";
import StyledText from "../../lowLevelComponents/styledText";

const CustomButton = ({text, backgroundColor, textColor, paddingVertical, marginTop, onPress}) => {
  return(
    <StyledTouchableOpacity
      onPress={onPress}
      backgroundColor={backgroundColor}
      paddingVertical={paddingVertical}
      marginTop={marginTop}
    >
      <StyledText
        color={textColor}
        textAlign={'center'}
      >
        {text}
      </StyledText>
    </StyledTouchableOpacity>
  );
}

export default CustomButton;