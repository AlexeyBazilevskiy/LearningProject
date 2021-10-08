import React from 'react'
import Box from "../../../../assets/icons/delivery-box.svg";
import Tag from "../../../../assets/icons/price-tag.svg";
import StyledView from "../../../../commonComponents/lowLevelComponents/styledView";
import StyledText from "../../../../commonComponents/lowLevelComponents/styledText";

const BasketInfo = ({count, orderId, orderCount}) => {
    return(
        <StyledView
            flexDirection={'row'}
            justifyContent={'space-between'}
            backgroundColor={'lightgray'}
            paddingVertical={'10px'}
        >
            <StyledText color={'black'} fontSize={'12px'} alignSelf={'center'} marginLeft={'5px'}>{orderId}</StyledText>
            <StyledView flexDirection={'row'}>
                <StyledView flexDirection={'row'} marginRight={'20px'}>
                    <Box width={20} height={20} fill={'black'} marginRight={5} />
                    <StyledText color={'black'} fontSize={'12px'} alignSelf={'center'}>{count}</StyledText>
                </StyledView>
                <StyledView flexDirection={'row'} marginRight={'20px'}>
                    <Tag width={20} height={20} fill={'black'} marginRight={5} />
                <StyledText color={'black'} fontSize={'12px'} alignSelf={'center'}>{orderCount}</StyledText>
                </StyledView>
            </StyledView>
        </StyledView>
    )
}

export default BasketInfo