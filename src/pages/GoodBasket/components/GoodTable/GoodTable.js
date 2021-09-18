import React, {useState, useCallback} from 'react'
import ItemList from '../ItemList/ItemList'
import StyledView from '../../lowLevelComponents/styledView'
import TableHeader from "../../complexedComponents/TableHeader/TableHeader";
import StyledFlatList from "../../lowLevelComponents/styledFlatList";
import StyledRefreshControl from "../../lowLevelComponents/styledRefreshControl";

const GoodsTable = ({goods}) => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(()=>{setRefreshing(false)}, 2000)
    }, []);

    return(
        <StyledView flex={1}>
            <TableHeader values={['ARTICLE', 'ACT']} />
            <StyledFlatList
                data={goods}
                renderItem={ItemList}
                keyExtractor={(good) => good.code}
                refreshControl={<StyledRefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh} />}
            />
        </StyledView>
    )
}

export default GoodsTable