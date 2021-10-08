import React from 'react'
import StyledView from "../../lowLevelComponents/styledView";
import StyledText from "../../lowLevelComponents/styledText";

const TableHeader = ({values}) => {
    return(
        <StyledView
            flexDirection={'row'}
            justifyContent={'space-between'}
            paddingVertical={'15px'}
            paddingRight={'15%'}
            paddingLeft={'10px'}
            borderBottomWidth={'2px'}
            borderColor={'lightgray'}
        >
            {values.map(value => (
                <StyledText color={'gray'} fontSize={'15px'} key={value}>{value}</StyledText>
            ))}
        </StyledView>
    )
}

export default TableHeader