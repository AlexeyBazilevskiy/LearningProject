import React from 'react'
import {FlatList} from 'react-native'
import ItemList from '../ItemList/ItemList'
import { StyledView, StyledText} from "../../../Styles/Styles";

const GoodsTable = ({goods}) => {
    return(
        <StyledView flex={1}>
            <StyledView
                flexDirection={'row'}
                justifyContent={'space-between'}
                paddingVertical={'15px'}
                paddingHorizontal={'15%'}
                borderBottomWidth={'2px'}
                borderColor={'lightgray'}

            >
                <StyledText color={'gray'} size={'12px'} marg={'auto 5px'}>ARTICLE</StyledText>
                <StyledText color={'gray'} size={'12px'}>ACT</StyledText>
            </StyledView>
            <FlatList
                data={goods}
                renderItem={ItemList}
                keyExtractor={(good) => good.code}
            />
        </StyledView>
    )
}

export default GoodsTable