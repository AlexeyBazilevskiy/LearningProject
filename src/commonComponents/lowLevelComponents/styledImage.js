import styled from 'styled-components/native'
import {
  backgroundMixin,
  borderMixin,
  flexMixin,
  marginsMixin,
  paddingMixin,
  sizeMixin
} from "./mixins/mixins";

const StyledImage = styled.Image`
  ${marginsMixin};
  ${paddingMixin};
  ${borderMixin};
  ${backgroundMixin};
  ${sizeMixin};
  ${flexMixin};
`
export default StyledImage