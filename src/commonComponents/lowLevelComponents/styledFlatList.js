import styled from "styled-components/native";
import {flexMixin, marginsMixin, paddingsMixin} from "./mixins/mixins";

const StyledFlatList = styled.FlatList`
  ${marginsMixin};
  ${paddingsMixin};
  ${flexMixin};
`

export default StyledFlatList