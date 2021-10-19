import React from 'react'
import StyledView from "../../lowLevelComponents/styledView";
import StyledText from "../../lowLevelComponents/styledText";
import StyledModal from "../../lowLevelComponents/styledModal";
import CustomButton from "../CustomButton/CustomButton";
import StyledTouchableOpacity from "../../lowLevelComponents/styledTouchableOpacity";
import {TouchableWithoutFeedback} from "react-native";

const ModalWindow = ({modalVisible, toggleModal, text}) => {
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
            backgroundColor={'gray'}
            padding={10}
          >
            <StyledText
              color={'white'}
              textAlign={'center'}
            >
              {text}
            </StyledText>
            <CustomButton onPress={toggleModal} textStyles={{textAlign: 'center'}} bodyStyles={{borderRadius: 10, backgroundColor: 'lightblue', padding: 10}} text={'Close Modal'} />
          </StyledView>
        </TouchableWithoutFeedback>
      </StyledTouchableOpacity>
    </StyledModal>
  )
}

export default ModalWindow