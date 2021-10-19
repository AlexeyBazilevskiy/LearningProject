import React from 'react'
import StyledImage from "../../lowLevelComponents/styledImage";
import StyledView from "../../lowLevelComponents/styledView";
import StyledScrollView from "../../lowLevelComponents/styledScrollView";

const Gallery = ({urls}) => {
  console.log(urls)
  return(
    <StyledScrollView
      flex={1}
      contentContainerStyle={{flexDirection:'row', flexWrap: 'wrap'}}
    >
      {urls.length !== 0 && urls.map((url) => (
        <StyledImage
          source={{url}}
          key={url}
          height={'70px'}
          width={'20%'}
          borderWidth={'1px'}
          borderColor={'gray'}
          marginTop={'5px'}
        />
      ))}
    </StyledScrollView>
  )
}

export default Gallery