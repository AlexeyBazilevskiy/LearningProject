import React, {useCallback, useState} from 'react'
import StyledRefreshControl from "../../lowLevelComponents/styledRefreshControl";
import StyledFlatList from "../../lowLevelComponents/styledFlatList";

const ListOfArray = ({data, renderItem}) => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(()=>{setRefreshing(false)}, 2000)
    }, []);

    return(
        <StyledFlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(good) => good.code}
            refreshControl={<StyledRefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh} />}
        />
    )
}

export default ListOfArray