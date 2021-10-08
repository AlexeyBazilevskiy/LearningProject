import React from 'react'
import ItemList from '../ItemList/ItemList'
import StyledView from '../../../../commonComponents/lowLevelComponents/styledView'
import TableHeader from "../../../../commonComponents/complexedComponents/TableHeader/TableHeader";
import ListOfArray from "../../../../commonComponents/complexedComponents/ListOfArray/ListOfArray";

const GoodsTable = ({goods}) => {
    return(
        <StyledView flex={1}>
            <TableHeader values={['ARTICLE', 'ACT']} />
            <ListOfArray data={goods} renderItem={ItemList} />
        </StyledView>
    )
}

export default GoodsTable