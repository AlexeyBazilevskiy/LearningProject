import React, {useState} from 'react'
import ItemList from '../ItemList/ItemList'
import StyledView from '../../../../commonComponents/lowLevelComponents/styledView'
import TableHeader from "../../../../commonComponents/complexedComponents/TableHeader/TableHeader";
import ListOfArray from "../../../../commonComponents/complexedComponents/ListOfArray/ListOfArray";
import ButtonGroup from "../../../../commonComponents/complexedComponents/ButtonGroup/ButtonGroup";
import CartonItem from '../CartonItem/CartonItem';

const GoodsTable = ({goods}, count) => {
    const [isArticle, setIsArticle] = useState(false)

    const onPressButton = (value) => {
        setIsArticle(value)
    }

    return(
        <StyledView flex={1}>
            <ButtonGroup
                buttons={['Cartons', 'Articles']}
                onPress={onPressButton}
                isArticle={isArticle}
            />
            <TableHeader values={[isArticle ? 'ARTICLE NO.' : 'CARTON NO.', 'ACT.']} />
            {isArticle ?
                <ListOfArray data={goods[0].order} RenderItem={ItemList} /> :
                <ListOfArray data={goods} RenderItem={CartonItem} count={count} />
            }
        </StyledView>
    )
}

export default GoodsTable