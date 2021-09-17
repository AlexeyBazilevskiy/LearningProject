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

// export const Link = styled(StyledText)`
//     color: blue;
// `