import React from 'react'
import FlashMessage, {showMessage, hideMessage} from "react-native-flash-message";
import StyledView from "../../commonComponents/lowLevelComponents/styledView";
import CustomButton from "../../commonComponents/complexedComponents/CustomButton/CustomButton";
import I18nJs from "../../language/strings";

const flashMessageButtonProps = [
  {
    backgroundColor: 'gray',
    text: I18nJs.t('defaultMessage'),
  },
  {
    flashMessageProps: {type: 'info'},
    backgroundColor: 'blue',
    text: I18nJs.t('infoMessage'),
  },
  {
    flashMessageProps: {type: 'danger'},
    backgroundColor: 'red',
    text: I18nJs.t('dangerMessage'),
  },
  {
    flashMessageProps: {type: 'warning'},
    backgroundColor: 'orange',
    text: I18nJs.t('warningMessage'),
  },
  {
    flashMessageProps: {type: 'success'},
    backgroundColor: 'green',
    text: I18nJs.t('successMessage'),
  },
  {
    flashMessageProps: {backgroundColor: 'purple', position: 'bottom'},
    backgroundColor: 'purple',
    text: I18nJs.t('customMessage'),
  },
  {
    flashMessageProps: {
      onPress: () => {
        showMessage({
          message: I18nJs.t('messageText'),
          description: I18nJs.t('messageDescText'),
        })
      }, floating: true
    },
    backgroundColor: 'gray',
    text: I18nJs.t('messageWithAction'),
  },
  {
    onPress: hideMessage,
    backgroundColor: 'gray',
    text: I18nJs.t('hideMessage'),
  },
]

const FlashMessagePage = () => {
  return(
    <StyledView
      flex={1}
      flexDirection={'row'}
      flexWrap={'wrap'}
      justifyContent={'space-around'}
    >
      {flashMessageButtonProps.map(({backgroundColor, text, flashMessageProps, onPress}, index) => (
        <CustomButton
          key={index}
          textStyles={{color: 'white', textAlign: 'center'}}
          text={text}
          bodyStyles={{borderRadius: 20, padding: 10, marginTop: 10, backgroundColor}}
          onPress={onPress ? onPress : () => {
            showMessage({
              message: I18nJs.t('messageText'),
              description: I18nJs.t('messageDescText'),
              ...flashMessageProps
            })
          }}
        />
      ))}
      <FlashMessage statusBarHeight={0} icon={'auto'} />
    </StyledView>
  )
}

export default FlashMessagePage
