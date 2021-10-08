import styled from "styled-components/native";
import {borderMixin, flexMixin, marginsMixin, paddingsMixin} from "./mixins/mixins";

const StyledView = styled.View`
  ${marginsMixin};
  ${paddingsMixin};
  ${flexMixin};
  ${borderMixin};
  ${({backgroundColor}) => backgroundColor ? `background-color: ${backgroundColor}` : '' };
  ${({alignSelf}) => alignSelf ? `alignSelf: ${alignSelf}` : '' }; 
`

export default StyledView