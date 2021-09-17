import styled from "styled-components/native";
import {marginsMixin, paddingsMixin} from "./mixins/mixins";

const StyledFlatList = styled.FlatList`
  ${marginsMixin};
  ${paddingsMixin};
`

export default StyledFlatList