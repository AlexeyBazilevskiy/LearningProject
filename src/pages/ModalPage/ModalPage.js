import React, {useState, useEffect} from 'react'
import StyledView from "../../commonComponents/lowLevelComponents/styledView";
import CustomButton from "../../commonComponents/complexedComponents/CustomButton/CustomButton";
import ModalWindow from "../../commonComponents/complexedComponents/ModalWindow/ModalWindow";
import I18nJs from "../../language/strings";
import NotifService from '../../notification/NotifService';
import {getImage} from "../../api";

const ModalPage = () => {
  const [modalVisible1, setModalVisible1] = useState(false)
  const [modalVisible2, setModalVisible2] = useState(false)
  const [notif] = useState(new NotifService())

  const toggleModal = async (buttonNum) => {
    notif.localNotif(null, null, null, I18nJs.t(`modal${buttonNum}`))
    getImage()
    switch (buttonNum) {
      case 1:
        setModalVisible1(!modalVisible1)
        break;
      case 2:
        setModalVisible2(!modalVisible2)
        break;
    }
  }

  return(
    <StyledView
      alignItems={'center'}
    >
      <CustomButton
        text={I18nJs.t('openModal1')}
        bodyStyles={{borderRadius: 10, padding: 5, backgroundColor: 'lightblue', width: 150, marginTop: 10}}
        textStyles={{textAlign: 'center'}}
        onPress={() => toggleModal(1)}
      />
      <CustomButton
      text={I18nJs.t('openModal2')}
      bodyStyles={{borderRadius: 10, padding: 5, backgroundColor: 'lightgreen', width: 150, marginTop: 10}}
      textStyles={{textAlign: 'center'}}
      onPress={() => toggleModal(2)}
    />
      <ModalWindow modalVisible={modalVisible1} toggleModal={() => toggleModal(1)} text={I18nJs.t('modal1')} />
      <ModalWindow modalVisible={modalVisible2} toggleModal={() => toggleModal(2)} text={I18nJs.t('modal2')} />
    </StyledView>
  )
}

export default ModalPage