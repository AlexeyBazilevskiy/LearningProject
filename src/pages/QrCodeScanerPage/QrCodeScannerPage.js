import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';
import StyledView from '../../commonComponents/lowLevelComponents/styledView';
import I18nJs from '../../language/strings';

const QrCodeScannerPage = ({navigation}) => {
  const [windowSize] = useState(Dimensions.get('window'));
  const [scanAreaX] = useState(250 / windowSize.height);
  const [scanAreaY] = useState(80 / windowSize.width);
  const [scanAreaWidth] = useState(200 / windowSize.height);
  const [scanAreaHeight] = useState(250 / windowSize.width);
  const [rectCoordinates] = useState({
    x: scanAreaX,
    y: scanAreaY,
    width: scanAreaWidth,
    height: scanAreaHeight,
  });

  const openLink = e => {
    navigation.navigate(I18nJs.t('webViewHeader'), {
      url: e.data,
    });
  };

  return (
    <StyledView flex={1}>
      <RNCamera
        width={windowSize.width}
        height={windowSize.height}
        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
        onBarCodeRead={openLink}
        rectOfInterest={rectCoordinates}
        cameraViewDimensions={{
          width: windowSize.width,
          height: windowSize.height,
        }}
      />
      <StyledView
        position={'absolute'}
        height={'200px'}
        width={'250px'}
        top={250}
        right={80}
        borderWidth={'5px'}
        borderColor={'white'}
      />
    </StyledView>
  );
};

export default QrCodeScannerPage;
