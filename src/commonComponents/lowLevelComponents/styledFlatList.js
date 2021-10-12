import styled from "styled-components/native";
import {
  backgroundMixin,
  borderMixin,
  flexMixin,
  fontMixin,
  marginsMixin,
  paddingsMixin,
  sizeMixin
} from "./mixins/mixins";

const StyledFlatList = styled.FlatList`
  ${marginsMixin};
  ${paddingsMixin};
  ${flexMixin};
  ${fontMixin};
  ${sizeMixin};
  ${backgroundMixin};
  ${borderMixin};
`

export default StyledFlatList