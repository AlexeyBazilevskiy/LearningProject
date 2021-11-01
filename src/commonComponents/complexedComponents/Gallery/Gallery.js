import React from 'react'
import StyledFlatList from "../../lowLevelComponents/styledFlatList";
import GalleryItem from "./GalleryItem/GallaryItem";
import StyledView from "../../lowLevelComponents/styledView";

const Gallery = ({data, contentContainerStyle, styles, isHorizontal}) => {

  return(
    <StyledView
      flex={1}
      style={styles}
    >
      <StyledFlatList
        data={data}
        flex={1}
        horizontal={isHorizontal ? true : false}
        contentContainerStyle={contentContainerStyle}
        renderItem={GalleryItem}
      />
     </StyledView>
  )
}

export default Gallery