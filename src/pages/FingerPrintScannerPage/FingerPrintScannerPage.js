import React, {useState} from 'react';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {Platform} from 'react-native';
import StyledView from '../../commonComponents/lowLevelComponents/styledView';
import CustomButton from '../../commonComponents/complexedComponents/CustomButton/CustomButton';
import I18nJs from '../../language/strings';
import InfoMessage from '../../commonComponents/complexedComponents/InfoMessage/InfoMessage';

const FingerPrintScannerPage = () => {
  const [isErr, setIsErr] = useState(null);
  const [timerCount, setTimerCount] = useState(null);

  const checkFingerScanner = () => {
    if (!timerCount) {
      FingerprintScanner.isSensorAvailable()
        .then(startScan)
        .catch(err => console.log(err));
    }
  };

  const startScan = () => {
    FingerprintScanner.authenticate({description: I18nJs.t('scanText')})
      .then(() => {
        setIsErr(false);
        hideInfoMessage();
      })
      .catch(err => {
        setIsErr(true);
        hideInfoMessage(err);
      });
  };

  const hideInfoMessage = err => {
    let timer = 2000;
    if (err) {
      timer = JSON.stringify(err).includes('AuthenticationFailed')
        ? 60000
        : 2000;
    }
    let interval;
    setTimerCount(timer / 1000);
    interval = setInterval(() => {
      setTimerCount(timerCount => timerCount - 1);
    }, 1000);
    setTimeout(() => {
      setIsErr(null);
      FingerprintScanner.release();
      clearInterval(interval);
      setTimerCount(null);
    }, timer);
  };

  return (
    <StyledView fllex={1}>
      {isErr !== null && (
        <InfoMessage
          bodyStyles={{
            borderRadius: 15,
            padding: 10,
            backgroundColor: isErr ? 'red' : 'lightgreen',
          }}
          text={
            isErr
              ? `${I18nJs.t('scanErr')} ${timerCount}s`
              : I18nJs.t('scanSuccess')
          }
        />
      )}
      <CustomButton
        text={I18nJs.t('fingerScannerButton')}
        bodyStyles={{
          backgroundColor: 'lightblue',
          marginTop: 10,
          borderRadius: 20,
          alignSelf: 'center',
        }}
        textStyles={{textAlign: 'center', padding: 15}}
        onPress={checkFingerScanner}
      />
    </StyledView>
  );
};

export default FingerPrintScannerPage;
