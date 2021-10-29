import React from 'react'
import StyledView from "../../lowLevelComponents/styledView";
import StyledText from "../../lowLevelComponents/styledText";
import { useTheme } from '@react-navigation/native';

const TableHeader = ({values}) => {
    const {colors} = useTheme()

    return(
        <StyledView
            flexDirection={'row'}
            justifyContent={'space-between'}
            paddingVertical={'15px'}
            paddingHorizontal={'15%'}
            borderBottomWidth={'2px'}
            borderColor={colors.tableBorder}
        >
            {values.map(value => (
                <StyledText color={colors.tableText} fontSize={'15px'} key={value}>{value}</StyledText>
            ))}
        </StyledView>
    )
}

export default TableHeader