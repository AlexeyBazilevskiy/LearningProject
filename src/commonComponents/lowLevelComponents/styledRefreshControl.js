import styled from "styled-components/native";
import {
  backgroundMixin,
  borderMixin,
  flexMixin,
  fontMixin,
  marginsMixin,
  paddingMixin,
  sizeMixin
} from "./mixins/mixins";

const StyledRefreshControl = styled.RefreshControl`
  ${marginsMixin};
  ${paddingMixin};
  ${fontMixin};
  ${borderMixin};
  ${backgroundMixin};
  ${sizeMixin};
  ${flexMixin};
`

export default StyledRefreshControl