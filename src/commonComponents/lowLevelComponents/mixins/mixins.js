import {css} from 'styled-components/native'

export const marginsMixin = css`
  ${({margin}) => margin ? `margin: ${margin}` : ''}
  ${({marginTop}) => marginTop ? `margin-top: ${marginTop}` : '' };
  ${({marginBottom}) => marginBottom ? `margin-bottom: ${marginBottom}` : '' };
  ${({marginRight}) => marginRight ? `margin-right: ${marginRight}` : '' };
  ${({marginLeft}) => marginLeft ? `margin-left: ${marginLeft}` : '' };
  ${({marginHorizontal}) => marginHorizontal ? `margin-horizontal: ${marginHorizontal}` : '' };
  ${({marginVertical}) => marginVertical ? `margin-vertical: ${marginVertical}` : '' };
`

export const paddingsMixin = css`
  ${({padding}) => padding ? `padding: ${padding}` : ''}
  ${({paddingTop}) => paddingTop ? `padding-top: ${paddingTop}` : '' };
  ${({paddingBottom}) => paddingBottom ? `padding-bottom: ${paddingBottom}` : '' };
  ${({paddingRight}) => paddingRight ? `padding-right: ${paddingRight}` : '' };
  ${({paddingLeft}) => paddingLeft ? `padding-left: ${paddingLeft}` : '' };
  ${({paddingVertical}) => paddingVertical ? `padding-vertical: ${paddingVertical}` : '' };
  ${({paddingHorizontal}) => paddingHorizontal ? `padding-horizontal: ${paddingHorizontal}` : '' };
`

export const flexMixin = css`
  ${({flex}) => flex ? `flex: ${flex}` : ''};
  ${({flexDirection}) => flexDirection ? `flex-direction: ${flexDirection}` : ''};
  ${({justifyContent}) => justifyContent ? `justify-content: ${justifyContent}` : ''};
`

export const borderMixin = css`
  ${({borderRadius}) => borderRadius ? `border-radius: ${borderRadius}` : ''};
  ${({borderWidth}) => borderWidth ? `border-width: ${borderWidth}` : ''};
  ${({borderColor}) => borderColor ? `border-color: ${borderColor}` : ''};
  ${({borderBottomWidth}) => borderBottomWidth ? `border-bottom-width: ${borderBottomWidth}` : ''};
  ${({borderTopWidth}) => borderTopWidth ? `border-top-width: ${borderTopWidth}` : ''};
`
//  ${({}) =>  ? `flex: ${}` : ''};