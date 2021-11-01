import React from 'react'
import StyledView from "../../../../commonComponents/lowLevelComponents/styledView";
import StyledText from "../../../../commonComponents/lowLevelComponents/styledText";
import StyledTouchableOpacity from "../../../../commonComponents/lowLevelComponents/styledTouchableOpacity";

const MusicListItem = ({item, info}) => {
  return(
    <StyledTouchableOpacity
    onPress={() => info(item)}
    >
      <StyledView
        backgroundColor={'#17214a'}
        padding={20}
        borderBottomWidth={'1px'}
        borderColor={'whitesmoke'}
      >
        <StyledText
          numberOfLines={1}
          color={'white'}
        >
          {item.name}
        </StyledText>

      </StyledView>
    </StyledTouchableOpacity>
  )
}

export default MusicListItem