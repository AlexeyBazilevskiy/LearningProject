import React, {useCallback, useState} from 'react'
import StyledRefreshControl from "../../lowLevelComponents/styledRefreshControl";
import StyledFlatList from "../../lowLevelComponents/styledFlatList";

const ListOfArray = ({data, RenderItem, info}) => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(()=>{setRefreshing(false)}, 2000)
    }, []);

    return(
        <StyledFlatList
            data={data}
            renderItem={({item}) => <RenderItem item={item} info={info} />}
            keyExtractor={(good, index) => `${good.name}${index}`}
            refreshControl={<StyledRefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh} />}
        />
    )
}

export default ListOfArray