import React from 'react';
import StyledView from '../../../../commonComponents/lowLevelComponents/styledView';
import StyledText from '../../../../commonComponents/lowLevelComponents/styledText';
import I18nJs from '../../../../language/strings';
import INInternet from '../../../../assets/icons/internet.svg';

const CustomCallout = ({text}) => {
  return (
    <StyledView backgroundColor={'white'} padding={10} borderRadius={'20px'}>
      <StyledText marginVertical={'5px'} textAlign={'center'}>
        {text}
      </StyledText>
      <StyledText marginVertical={'5px'} textAlign={'center'}>
        {I18nJs.t('clickMarker')}
      </StyledText>
      <INInternet width={30} alignSelf={'center'} height={30} fill={'#000'} />
    </StyledView>
  );
};

export default CustomCallout;
