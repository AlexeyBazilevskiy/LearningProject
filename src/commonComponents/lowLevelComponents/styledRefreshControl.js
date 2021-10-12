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

const StyledRefreshControl = styled.RefreshControl`
  ${marginsMixin};
  ${paddingsMixin};
  ${flexMixin};
  ${fontMixin};
  ${sizeMixin};
  ${backgroundMixin};
  ${borderMixin};
`

export default StyledRefreshControl