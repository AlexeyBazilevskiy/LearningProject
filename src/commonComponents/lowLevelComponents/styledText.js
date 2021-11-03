import styled from 'styled-components/native'
import {fontMixin, marginsMixin, paddingsMixin} from "./mixins/mixins";

const StyledText = styled.Text`
  ${marginsMixin};
  ${paddingsMixin};
  ${fontMixin} 
  ${({alignSelf}) => alignSelf ? `alignSelf: ${alignSelf}` : '' }; 
`

export default StyledText