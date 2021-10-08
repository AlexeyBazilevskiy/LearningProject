import styled from 'styled-components/native'
import {marginsMixin, paddingsMixin} from "./mixins/mixins";

const StyledImage = styled.Image`
  ${marginsMixin};
  ${paddingsMixin};    
  ${({width}) => width ? `width: ${width}` : '' };  
  ${({height}) => height ? `height: ${height}` : '' };  
`
export default StyledImage