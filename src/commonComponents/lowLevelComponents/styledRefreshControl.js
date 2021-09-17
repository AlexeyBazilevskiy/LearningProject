import styled from "styled-components/native";
import {marginsMixin, paddingsMixin} from "./mixins/mixins";

const StyledRefreshControl = styled.RefreshControl`
  ${marginsMixin};
  ${paddingsMixin};
`

export default StyledRefreshControl