import React, {useCallback, useState} from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import StyledRefreshControl from "../../lowLevelComponents/styledRefreshControl";
import StyledFlatList from "../../lowLevelComponents/styledFlatList";
import StyledTouchableOpacity from "../../lowLevelComponents/styledTouchableOpacity";
import StyledText from "../../lowLevelComponents/styledText";

const ListOfArray = ({data, RenderItem, count}) => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(()=>{setRefreshing(false)}, 2000)
    }, []);

    const renderLeftActions = () => {
        return (
          <StyledTouchableOpacity
            backgroundColor={'red'}
            width={'80px'}
            justifyContent={'center'}
          >
              <StyledText
                color={'white'}
                fontWeight={'400'}
                alignSelf={'center'}
                fontSize={'18px'}
              >
                  Delete
              </StyledText>
          </StyledTouchableOpacity>
        );
    };

    return(
        <StyledFlatList
            data={data}
            renderItem={({item}) => (
                <Swipeable rightThreshold={10} renderRightActions={renderLeftActions}>
                    <RenderItem item={item}/>
                </Swipeable>
            )}
            keyExtractor={(good, index) => index}
            refreshControl={<StyledRefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh} />}
        />
    )
}

export default ListOfArray