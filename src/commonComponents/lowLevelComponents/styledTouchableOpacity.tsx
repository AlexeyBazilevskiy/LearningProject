import styled from 'styled-components/native'
import {
  marginsMixin,
  paddingsMixin,
  flexMixin,
  borderMixin,
} from "./mixins/mixins";

const StyledTouchableOpacity = styled.TouchableOpacity`
  ${marginsMixin};
  ${paddingsMixin};
  ${flexMixin};
  ${borderMixin};
  ${({backgroundColor}) => backgroundColor ? `background-color: ${backgroundColor}` : ''};
  ${({width}) => width ? `width: ${width}` : ''}
`;

export default StyledTouchableOpacity;