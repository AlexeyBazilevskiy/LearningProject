import React from 'react'
import StyledImage from "../../../lowLevelComponents/styledImage";

const GalleryItem = ({item}) => {
  return(
    <StyledImage
      source={{uri: item}}
      key={item}
      height={'80px'}
      width={'80px'}
      marginRight={'5px'}
      marginTop={'5px'}
    />
  )
}

export default GalleryItem
