import React from 'react'
import Button from '../Button/Button';
import StyledView from '../../lowLevelComponents/styledView';

const ButtonGroup = ({buttons, onPress, isArticle}) => {
  return(
    <StyledView
      flexDirection={'row'}
      backgroundColor={'#e3e3e3'}
    >
      {buttons.map((item) => (
        <Button item={item} onPress={onPress} isArticle={isArticle} key={item} />
      ))}
    </StyledView>
  );
};

export default ButtonGroup;