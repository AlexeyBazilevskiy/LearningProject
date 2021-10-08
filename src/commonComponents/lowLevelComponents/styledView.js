import styled from "styled-components/native";
import {marginsMixin, paddingsMixin} from "./mixins/mixins";

const StyledView = styled.View`
  ${marginsMixin};
  ${paddingsMixin};
  ${({flexDirection}) => flexDirection ? `flex-direction: ${flexDirection}` : '' };
  ${({justifyContent}) => justifyContent ? `justify-content: ${justifyContent}` : '' };
  ${({backgroundColor}) => backgroundColor ? `background-color: ${backgroundColor}` : '' };
  ${({borderBottomWidth}) => borderBottomWidth ? `border-bottom-width: ${borderBottomWidth}` : '' };
  ${({borderColor}) => borderColor ? `border-color: ${borderColor}` : '' };
  ${({borderRadius}) => borderRadius ? `border-radius: ${borderRadius}` : '' };
  ${({alignSelf}) => alignSelf ? `alignSelf: ${alignSelf}` : '' }; 
`

export default StyledView