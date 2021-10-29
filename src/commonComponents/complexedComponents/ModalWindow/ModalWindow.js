import React from 'react'
import StyledView from "../../lowLevelComponents/styledView";
import StyledText from "../../lowLevelComponents/styledText";
import StyledModal from "../../lowLevelComponents/styledModal";
import CustomButton from "../CustomButton/CustomButton";
import StyledTouchableOpacity from "../../lowLevelComponents/styledTouchableOpacity";
import {TouchableWithoutFeedback} from "react-native";
import I18nJs from "../../../language/strings";
import { useTheme } from '@react-navigation/native';

const ModalWindow = ({modalVisible, toggleModal, text}) => {
  const { colors } = useTheme();

  return(
    <StyledModal
      transparent={true}
      visible={modalVisible}
      animationType="slide"
      onRequestClose={toggleModal}
    >
      <StyledTouchableOpacity
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}
        onPress={toggleModal}
      >
        <TouchableWithoutFeedback>
          <StyledView
            backgroundColor={colors.headerColor}
            padding={10}
          >
            <StyledText
              color={colors.text}
              textAlign={'center'}
            >
              {text}
            </StyledText>
            <CustomButton onPress={toggleModal} textStyles={{color: colors.text ,textAlign: 'center'}} bodyStyles={{borderRadius: 10, backgroundColor: 'lightblue', padding: 10}} text={I18nJs.t('closeModal')} />
          </StyledView>
        </TouchableWithoutFeedback>
      </StyledTouchableOpacity>
    </StyledModal>
  )
}

export default ModalWindow