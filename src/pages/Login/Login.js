import React from 'react';
import StyledView from "../../commonComponents/lowLevelComponents/styledView";
import StyledText from "../../commonComponents/lowLevelComponents/styledText";
import LoginFrom from "./components/LoginForm/LoginForm";
import StyledScrollView from "../../commonComponents/lowLevelComponents/styledScrollView";

const Login = () => {
  return(
    <StyledScrollView flex={1}>
      <StyledView>
        <StyledView
          paddingVertical={'70px'}
          backgroundColor={'orange'}
          justifyContent={'center'}
          flexDirection={'row'}>
          <StyledText
            fontSize={'80px'}
            color={'white'}
            alignSelf={'center'}
          >
            D
          </StyledText>
          <StyledText
            color={'white'}
            fontSize={'25px'}
            alignSelf={'center'}
            marginTop={'-55px'}
            marginLeft={'-10px'}
          >
            ®
          </StyledText>
        </StyledView>
        <LoginFrom />
        <StyledText
          textAlign={'center'}
        >
          2.3.19 (202012041745) - DEBUG
        </StyledText>
      </StyledView>
    </StyledScrollView>
  )
}

export default Login