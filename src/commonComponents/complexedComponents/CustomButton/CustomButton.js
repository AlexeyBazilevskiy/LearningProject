import React, {useState} from 'react'
import StyledTouchableOpacity from "../../lowLevelComponents/styledTouchableOpacity";
import StyledText from "../../lowLevelComponents/styledText";
import {Dimensions} from "react-native";

const CustomButton = ({text, backgroundColor, textColor, onPress, blockStyle}) => {
  const [windowSize] = useState(Dimensions.get('window'))

  return(
    <StyledTouchableOpacity
      style={blockStyle}
      onPress={onPress}
      backgroundColor={backgroundColor}
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