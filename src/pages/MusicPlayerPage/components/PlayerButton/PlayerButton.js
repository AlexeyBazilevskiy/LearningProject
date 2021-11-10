import React from 'react';
import StyledTouchableOpacity from '../../../../commonComponents/lowLevelComponents/styledTouchableOpacity';

const PlayerButton = ({onPress, Icon}) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <Icon fill={'#fff'} width={40} height={40} />
    </StyledTouchableOpacity>
  );
};

export default PlayerButton;
