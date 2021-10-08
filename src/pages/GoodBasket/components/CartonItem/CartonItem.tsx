import React from 'react';
import StyledView from '../../../../commonComponents/lowLevelComponents/styledView';
import StyledText from '../../../../commonComponents/lowLevelComponents/styledText';
import More from '../../../../assets/icons/right-arrow.svg';

const CartonItem = ({item: {orderId, orderCount}}) => {
  return(
    <StyledView
      paddingVertical={'20px'}
      flexDirection={'row'}
      backgroundColor={'white'}
      justifyContent={'space-between'}
      borderBottomWidth={'2px'}
      borderColor={'lightgray'}
    >
     <StyledText
       marginLeft={'20px'}
       alignItem={'center'}
       fontWeight={'bold'}
     >
       {orderId}
     </StyledText>
      <StyledView  paddingHorizontal={'55px'} borderRadius={'20px'} backgroundColor={'gray'} alignSelf={'center'}>
        <StyledText color={'white'} fontSize={'12px'} fontWeight={'bold'}>{orderCount}</StyledText>
      </StyledView>
      <More width={10} height={10} fill={'black'} alignSelf={'center'}/>
    </StyledView>
  )
}

export default CartonItem;