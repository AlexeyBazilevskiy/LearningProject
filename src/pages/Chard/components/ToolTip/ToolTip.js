import React from 'react';
import StyledText from "../../../../commonComponents/lowLevelComponents/styledText";

const ToolTip = ({data, month}) => {

  return (
    <StyledText
      pos
    >
      <StyledText>
        Month: {month[data.x]}
      </StyledText>
    </StyledText>
  );
};

export default ToolTip;