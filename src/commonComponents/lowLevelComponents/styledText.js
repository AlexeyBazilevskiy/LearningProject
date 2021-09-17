import styled from 'styled-components/native'
import {marginsMixin, paddingsMixin} from "./mixins/mixins";

const StyledText = styled.Text`
  ${marginsMixin};
  ${paddingsMixin};
  ${({color}) => color ? `color: ${color}` : '' };  
  ${({fontWeight}) => fontWeight ? `font-weight: ${fontWeight}` : '' };  
  ${({fontSize}) => fontSize ? `font-size: ${fontSize}` : '' };  
  ${({lineHeight}) => lineHeight ? `line-height: ${lineHeight}` : ''};  
  ${({alignSelf}) => alignSelf ? `alignSelf: ${alignSelf}` : '' }; 
`

export default StyledText