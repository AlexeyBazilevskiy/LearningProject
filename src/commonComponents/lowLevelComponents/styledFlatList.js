import styled from "styled-components/native";
import {
  backgroundMixin,
  borderMixin,
  flexMixin,
  marginsMixin,
  paddingMixin,
  sizeMixin
} from "./mixins/mixins";

const StyledFlatList = styled.FlatList`
  ${marginsMixin};
  ${paddingMixin};
  ${borderMixin};
  ${backgroundMixin};
  ${sizeMixin};
  ${flexMixin};
`

export default StyledFlatList