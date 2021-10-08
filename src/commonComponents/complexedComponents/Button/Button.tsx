import React, {useState, useEffect} from 'react';
import StyledTouchableOpacity from '../../lowLevelComponents/styledTouchableOpacity';
import StyledText from '../../lowLevelComponents/styledText';

const Button = ({item, onPress, isArticle}) => {
  const [styles, setStyles] = useState(null)

  useEffect(() => {
    if((isArticle && item === 'Articles') || (!isArticle && item !== 'Articles')){
      setStyles({
        backgroundColor: 'white',
        margin: 2,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
      });
    }
    else(
      setStyles(null)
    )
  }, [isArticle])

  const onPressButton = () => {
    if(item === 'Articles'){
      onPress(true)
    }
    else{
      onPress(false)
    }
  }

  return(
    <StyledTouchableOpacity
      onPress={onPressButton}
      flex={1}
      style={styles}
    >
      <StyledText
        padding={'5px'}
        color={'black'}
        fontWeight={'bold'}
        textAlign={'center'}
      >
        {item}
      </StyledText>
    </StyledTouchableOpacity>
  )
}

export default Button;