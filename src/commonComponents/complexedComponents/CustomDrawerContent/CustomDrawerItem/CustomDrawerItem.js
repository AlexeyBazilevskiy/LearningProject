import React from 'react'
import StyledView from "../../../lowLevelComponents/styledView";
import StyledTouchableOpacity from "../../../lowLevelComponents/styledTouchableOpacity";
import StyledText from "../../../lowLevelComponents/styledText";

const CustomDrawerItem = ({item: {name, key}, info: {navigation, Icon, current}}) => {
  const onPresDrawerItem = () => {
    navigation.navigate(name)
  }

  return(
    <StyledTouchableOpacity
    onPress={onPresDrawerItem}
    >
      <StyledView
        borderRadius={'20px'}
        backgroundColor={current.key == key ? 'rgba(255, 0, 0, .2)' : 'transparent'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        padding={10}
        marginHorizontal={'20px'}
      >
        <StyledText>
          {name}
        </StyledText>
        {Icon && <Icon width={20} height={20} fill={'#000'} />}
      </StyledView>
    </StyledTouchableOpacity>
  )
}

export default CustomDrawerItem