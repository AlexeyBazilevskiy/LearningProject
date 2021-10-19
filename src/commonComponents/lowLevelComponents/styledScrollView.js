import styled from 'styled-components/native'
import {
  backgroundMixin,
  borderMixin,
  marginsMixin,
  paddingMixin,
} from "./mixins/mixins";

const StyledScrollView = styled.ScrollView`
  ${marginsMixin};
  ${paddingMixin};
  ${borderMixin};
  ${backgroundMixin};
`
export default StyledScrollView