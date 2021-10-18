import React from 'react'
import Box from "../../../assets/icons/delivery-box.svg";
import Tag from "../../../assets/icons/price-tag.svg";
import StyledView from "../../lowLevelComponents/styledView";
import StyledText from "../../lowLevelComponents/styledText";

const BasketInfo = ({count, orderId}) => {
    return(
        <StyledView
            flexDirection={'row'}
            justifyContent={'space-between'}
            backgroundColor={'lightgray'}
            paddingVertical={'10px'}
        >
            <StyledView flexDirection={'row'}>
                <Box width={20} height={20} fill={'black'} marginRight={5} />
                <StyledText color={'black'} fontSize={'12px'} alignSelf={'center'}>{orderId}</StyledText>
            </StyledView>
            <StyledView flexDirection={'row'}>
                <Tag width={20} height={20} fill={'black'} marginRight={5} />
                <StyledText color={'black'} fontSize={'12px'} alignSelf={'center'}>{count}</StyledText>
            </StyledView>
        </StyledView>
    )
}

export default BasketInfo