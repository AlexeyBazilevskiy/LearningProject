import {css} from 'styled-components/native'

export const marginsMixin = css`
  ${({marginTop}) => marginTop ? `margin-top: ${marginTop}` : '' };
  ${({marginBottom}) => marginBottom ? `margin-bottom: ${marginBottom}` : '' };
  ${({marginRight}) => marginRight ? `margin-right: ${marginRight}` : '' };
  ${({marginLeft}) => marginLeft ? `margin-left: ${marginLeft}` : '' };
  ${({marginHorizontal}) => marginHorizontal ? `margin-horizontal: ${marginHorizontal}` : '' };
  ${({marginVertical}) => marginVertical ? `margin-vertical: ${marginVertical}` : '' };
`

export const paddingsMixin = css`
  ${({paddingTop}) => paddingTop ? `padding-top: ${paddingTop}` : '' };
  ${({paddingBottom}) => paddingBottom ? `padding-bottom: ${paddingBottom}` : '' };
  ${({paddingRight}) => paddingRight ? `padding-right: ${paddingRight}` : '' };
  ${({paddingLeft}) => paddingLeft ? `padding-left: ${paddingLeft}` : '' };
  ${({paddingVertical}) => paddingVertical ? `padding-vertical: ${paddingVertical}` : '' };
  ${({paddingHorizontal}) => paddingHorizontal ? `padding-horizontal: ${paddingHorizontal}` : '' };
`

export const flexMixin = css`
  ${({flex}) => flex ? `flex: ${flex}` : ''}
  ${({flexDirection}) => flexDirection ? `flex-direction: ${flexDirection}` : '' };
  ${({justifyContent}) => justifyContent ? `justify-content: ${justifyContent}` : ''};
  ${({alignSelf}) => alignSelf ? `align-self: ${alignSelf}` : '' }; 
`

export const sizeMixin = css`
  ${({width}) => width ? `width: ${width}` : '' };  
  ${({height}) => height ? `height: ${height}` : '' };  
  ${({minHeight}) => minHeight ? `min-height: ${minHeight}` : ''}
`

export const backgroundMixin = css`
  ${({backgroundColor}) => backgroundColor ? `background-color: ${backgroundColor}` : ''};
`

export const borderMixin = css`
  ${({borderBottomWidth}) => borderBottomWidth ? `border-bottom-width: ${borderBottomWidth}` : '' };
  ${({borderWidth}) => borderWidth ? `border-width: ${borderWidth}` : '' };
  ${({borderColor}) => borderColor ? `border-color: ${borderColor}` : '' };
  ${({borderRadius}) => borderRadius ? `border-radius: ${borderRadius}` : '' };
`

export const fontMixin = css`
  ${({color}) => color ? `color: ${color}` : '' };  
  ${({fontWeight}) => fontWeight ? `font-weight: ${fontWeight}` : '' };  
  ${({fontSize}) => fontSize ? `font-size: ${fontSize}` : '' };  
  ${({lineHeight}) => lineHeight ? `line-height: ${lineHeight}` : ''}; 
  ${({textAlign}) => textAlign ? `text-align: ${textAlign}` : '' }; 
`