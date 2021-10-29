import styled from 'styled-components/native'
import {
  backgroundMixin,
  borderMixin,
  flexMixin,
  marginsMixin,
  paddingMixin,
  sizeMixin
} from "./mixins/mixins";

const StyledTouchableOpacity = styled.TouchableOpacity`
  ${marginsMixin};
  ${paddingMixin};
  ${borderMixin};
  ${backgroundMixin};
  ${sizeMixin};
  ${flexMixin};
`

export default StyledTouchableOpacity