import React from 'react'
import More from '../../../../assets/icons/right-arrow.svg'
import StyledView from '../../../../commonComponents/lowLevelComponents/styledView'
import StyledText from "../../../../commonComponents/lowLevelComponents/styledText";
import StyledImage from "../../../../commonComponents/lowLevelComponents/styledImage";

const ItemList = ({item: {code, imgUri, color, size, count, name}}) => {
    return(
        <StyledView>
            <StyledView
                paddingVertical={'10px'}
                flexDirection={'row'}
                justifyContent={'space-between'}
                backgroundColor={'white'}
                borderBottomWidth={'2px'}
                borderColor={'lightgray'}
            >
                <StyledImage source={{uri: `${imgUri}`}} width={'60px'} height={'60px'} marginVertical={'auto'} marginLeft={'20px'}/>
                <StyledView alignSelf={'center'}>
                    <StyledText
                        color={'black'}
                        fontSize={'13px'}
                        fontWeight={'bold'}
                        lineHeight={'20px'}
                    >
                        {code}
                    </StyledText>
                    <StyledText color={'black'} fontSize={'13px'} fontWeight={'bold'} lineHeight={'20px'}>{color} {size}</StyledText>
                    <StyledText color={'gray'} fontSize={'13px'} lineHeight={'20px'}>{name}</StyledText>
                </StyledView>
                <StyledView paddingHorizontal={'40px'} borderRadius={'20px'} backgroundColor={'green'} alignSelf={'center'}>
                    <StyledText color={'white'} fontSize={'12px'} fontWeight={'bold'}>{count}</StyledText>
                </StyledView>
                <More width={10} height={10} fill={'black'} alignSelf={'center'}/>
            </StyledView>
        </StyledView>
    )
}

export default ItemList