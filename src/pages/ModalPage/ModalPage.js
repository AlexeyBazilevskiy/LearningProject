import React, {useState} from 'react';
import StyledView from '../../commonComponents/lowLevelComponents/styledView';
import CustomButton from '../../commonComponents/complexedComponents/CustomButton/CustomButton';
import ModalWindow from '../../commonComponents/complexedComponents/ModalWindow/ModalWindow';

const ModalPage = () => {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const toggleModal = buttonNum => {
    switch (buttonNum) {
      case 1:
        setModalVisible1(!modalVisible1);
        break;
      case 2:
        setModalVisible2(!modalVisible2);
        break;
    }
  };

  return (
    <StyledView alignItems={'center'}>
      <CustomButton
        text={'Open modal 1'}
        bodyStyles={{
          borderRadius: 10,
          padding: 5,
          backgroundColor: 'lightblue',
          width: 150,
          marginTop: 10,
        }}
        textStyles={{textAlign: 'center'}}
        onPress={() => toggleModal(1)}
      />
      <CustomButton
        text={'Open modal 2'}
        bodyStyles={{
          borderRadius: 10,
          padding: 5,
          backgroundColor: 'lightgreen',
          width: 150,
          marginTop: 10,
        }}
        textStyles={{textAlign: 'center'}}
        onPress={() => toggleModal(2)}
      />
      <ModalWindow
        modalVisible={modalVisible1}
        toggleModal={() => toggleModal(1)}
        text={'modal 1'}
      />
      <ModalWindow
        modalVisible={modalVisible2}
        toggleModal={() => toggleModal(2)}
        text={'modal 2'}
      />
    </StyledView>
  );
};

export default ModalPage;
