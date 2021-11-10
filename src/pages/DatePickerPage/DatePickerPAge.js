import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Platform} from 'react-native';
import StyledView from '../../commonComponents/lowLevelComponents/styledView';
import CustomButton from '../../commonComponents/complexedComponents/CustomButton/CustomButton';
import StyledText from '../../commonComponents/lowLevelComponents/styledText';
import I18nJs from '../../language/strings';

const DatePickerPage = () => {
  const [date, setDate] = useState(new Date());
  const [isVisible, setIsVisible] = useState(
    Platform.OS === 'ios' ? true : false,
  );
  const [mode, setMode] = useState('date');
  const [display, setDisplay] = useState('spinner');

  const onChangeDisplayType = () => {
    switch (display) {
      case 'spinner':
        setDisplay(Platform.OS === 'ios' ? 'compact' : 'calendar');
        Platform.OS !== 'ios' && setMode('date');
        break;
      case 'compact':
        setDisplay(Platform.OS === 'ios' ? 'inline' : 'clock');
        break;
      case 'calendar':
        setDisplay(Platform.OS === 'ios' ? 'inline' : 'clock');
        Platform.OS !== 'ios' && setMode('time');
        break;
      case 'clock':
        setDisplay('spinner');
        break;
      case 'inline':
        setDisplay('spinner');
        break;
    }
  };

  const onChangeModeType = () => {
    switch (mode) {
      case 'date':
        display !== 'calendar' && setMode('time');
        break;
      case 'time':
        display !== 'clock' && setMode('date');
        break;
    }
  };

  return (
    <StyledView justifyContent={'center'} marginTop={'20px'}>
      <StyledView flexDirection={'row'} justifyContent={'space-around'}>
        {Platform.OS !== 'ios' && (
          <CustomButton
            textStyles={{color: 'white', padding: 10}}
            text={I18nJs.t('openDatePickerText')}
            bodyStyles={{
              alignSelf: 'center',
              borderRadius: 15,
              backgroundColor: 'gray',
            }}
            onPress={() => {
              setIsVisible(true);
            }}
          />
        )}
        <CustomButton
          textStyles={{color: 'white', padding: 10}}
          text={mode}
          bodyStyles={{
            alignSelf: 'center',
            borderRadius: 15,
            backgroundColor: 'gray',
          }}
          onPress={onChangeModeType}
        />
        <CustomButton
          textStyles={{color: 'white', padding: 10}}
          text={display}
          bodyStyles={{
            alignSelf: 'center',
            borderRadius: 15,
            backgroundColor: 'gray',
          }}
          onPress={onChangeDisplayType}
        />
      </StyledView>
      {isVisible && (
        <DateTimePicker
          value={date}
          is24Hour
          mode={mode}
          display={display}
          onChange={(e, d) => {
            setDate(d);
            Platform.OS !== 'ios' && setIsVisible(false);
          }}
        />
      )}
      <StyledText marginTop={'20px'} fontSize={'18px'} textAlign={'center'}>
        {date.toString()}
      </StyledText>
    </StyledView>
  );
};

export default DatePickerPage;
