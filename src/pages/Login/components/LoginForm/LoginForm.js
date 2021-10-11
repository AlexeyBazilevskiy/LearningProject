import React, {useState} from 'react';
import {Platform} from 'react-native';
import StyledView from "../../../../commonComponents/lowLevelComponents/styledView";
import StyledText from "../../../../commonComponents/lowLevelComponents/styledText";
import StyledInput from "../../../../commonComponents/lowLevelComponents/styledInput";
import Eye from '../../../../assets/icons/eye.svg'
import EyeOff from '../../../../assets/icons/eye_off.svg'
import CustomButton from "../../../../commonComponents/complexedComponents/CustomButton/CustomButton";
import LinkText from "../../../../commonComponents/complexedComponents/LinkText/LinkText";
import ErrorMessage from "../../../../commonComponents/complexedComponents/ErrorMessage/ErrorMessage";
import StyledTouchableOpacity from "../../../../commonComponents/lowLevelComponents/styledTouchableOpacity";

const LoginFrom = () => {
  const [type, setType] = useState(true)
  const [validErr, setValidErr] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')

  const sendData = () => {
    if(pass === '' && name === ''){
      setErrorText('Fill in all the fields below first')
      setValidErr(true)
    }
    else if(!name.includes('@')){
      setErrorText('No valid email address')
      setValidErr(true)
    }
    else if(pass.length < 6){
      setErrorText('Password must have more then 6 symbols')
      setValidErr(true)
    }
    else{
      setValidErr(false)
    }
  }

  const showOrHidePass = () => {
    setType(!type)
  }

  return(
    <StyledView
      margin={30}
    >
      {validErr && <ErrorMessage text={errorText}/>}
      <StyledText
        color={'gray'}
      >
        USERNAME
      </StyledText>
      <StyledInput
        marginVertical={ Platform.OS === 'ios' ? '10px' : '0' }
        borderBottomWidth={'1px'}
        borderColor={'gray'}
        value={name}
        contextMenuHidden={false}
        onChangeText={(value) => setName(value)}
      />
      <StyledText
        marginTop={'20px'}
        color={'gray'}
      >
        PASSWORD
      </StyledText>
      <StyledView
        flexDirection={'row'}
        borderBottomWidth={'1px'}
        borderColor={'gray'}
      >
        <StyledInput
          marginVertical={ Platform.OS === 'ios' ? '10px' : '0' }
          flex={1}
          secureTextEntry={type}
          value={pass}
          contextMenuHidden={false}
          onChangeText={(value) => setPass(value)}
        />
        <StyledTouchableOpacity onPress={showOrHidePass}>
          {type ? <Eye fill={'gray'} width={25} flex={1} /> : <EyeOff fill={'gray'} width={25} flex={1} />}
        </StyledTouchableOpacity>
      </StyledView>
      <CustomButton
        onPress={sendData}
        text={'LOGIN'}
        textColor={'#fff'}
        backgroundColor={'#002c5e'}
        paddingVertical={'10px'}
        marginTop={'15px'}
      />
      <LinkText
        text={'FORGOT PASSWORD?'}
        marginTop={'10px'}
        textAlign={'center'}
      />
    </StyledView>
  )
}

export default LoginFrom;