import styled, {css} from 'styled-components/native'

const marginAndPadding = css`
    ${({marginTop}) => marginTop ? `margin-top: ${marginTop}` : '' };
    ${({marginBottom}) => marginBottom ? `margin-bottom: ${marginBottom}` : '' };
    ${({marginRight}) => marginRight ? `margin-right: ${marginRight}` : '' };
    ${({marginLeft}) => marginLeft ? `margin-left: ${marginLeft}` : '' };
    ${({marginHorizontal}) => marginHorizontal ? `margin-horizontal: ${marginHorizontal}` : '' };
    ${({marginVertical}) => marginVertical ? `margin-vertical: ${marginVertical}` : '' };
    ${({paddingTop}) => paddingTop ? `padding-top: ${paddingTop}` : '' };
    ${({paddingBottom}) => paddingBottom ? `padding-bottom: ${paddingBottom}` : '' };
    ${({paddingRight}) => paddingRight ? `padding-right: ${paddingRight}` : '' };
    ${({paddingLeft}) => paddingLeft ? `padding-left: ${paddingLeft}` : '' };
    ${({paddingVertical}) => paddingVertical ? `padding-vertical: ${paddingVertical}` : '' };
    ${({paddingHorizontal}) => paddingHorizontal ? `padding-horizontal: ${paddingHorizontal}` : '' };
`

export const StyledView = styled.View`
    ${marginAndPadding}
    ${({flexDirection}) => flexDirection ? `flex-direction: ${flexDirection}` : '' };
    ${({justifyContent}) => justifyContent ? `justify-content: ${justifyContent}` : '' };
    ${({backgroundColor}) => backgroundColor ? `background-color: ${backgroundColor}` : '' };
    ${({borderBottomWidth}) => borderBottomWidth ? `border-bottom-width: ${borderBottomWidth}` : '' };
    ${({borderColor}) => borderColor ? `border-color: ${borderColor}` : '' };
    ${({borderRadius}) => borderRadius ? `border-radius: ${borderRadius}` : '' };
    ${({alignSelf}) => alignSelf ? `alignSelf: ${alignSelf}` : '' }; 
`

export const StyledText = styled.Text`
    ${marginAndPadding}
    ${({color}) => color ? `color: ${color}` : '' };  
    ${({fontWeight}) => fontWeight ? `font-weight: ${fontWeight}` : '' };  
    ${({fontSize}) => fontSize ? `font-size: ${fontSize}` : '' };  
    ${({lineHeight}) => lineHeight ? `line-height: ${lineHeight}` : ''}  
    ${({alignSelf}) => alignSelf ? `alignSelf: ${alignSelf}` : '' }; 
`

export const StyledImage = styled.Image`    
    ${marginAndPadding}
    ${({width}) => width ? `width: ${width}` : '' };  
    ${({height}) => height ? `height: ${height}` : '' };  
`

export const Link = styled(StyledText)`
    color: blue;
`