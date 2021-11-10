import React from 'react';
import StyledTouchableOpacity from '../../lowLevelComponents/styledTouchableOpacity';
import StyledText from '../../lowLevelComponents/styledText';

const CustomButton = ({text, bodyStyles, textStyles, onPress}) => {
  return (
    <StyledTouchableOpacity style={bodyStyles} onPress={onPress}>
      <StyledText style={textStyles}>{text}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default CustomButton;
