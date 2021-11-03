import React, {useState, useEffect} from 'react'
import {Dimensions} from 'react-native'
import StyledView from "../../commonComponents/lowLevelComponents/styledView";
import BasketInfo from "../../commonComponents/complexedComponents/BasketInfo/BasketInfo";
import Signal from "../../assets/icons/signal.svg";
import StyledText from "../../commonComponents/lowLevelComponents/styledText";
import CustomButton from "../../commonComponents/complexedComponents/CustomButton/CustomButton";
import InfoMessage from "../../commonComponents/complexedComponents/InfoMessage/InfoMessage";
import Header from "../../commonComponents/complexedComponents/Header/Header";
import {SafeAreaView} from "react-native-safe-area-context";

const headerData = {firstLink: 'Cancel', pageTitle: 'Articles In Carton', secondLink: 'Confirm'}

const ScanCount = () => {
  const [count, setCount] = useState(0)
  const [isReading, setIsReading] = useState(false)
  const [isErr, setIsErr] = useState(false)
  const [windowSize] = useState(Dimensions.get('window'))
  const [resOfReading, setResOfReading] = useState(null)

  useEffect(() => {
    setResOfReading(setInterval(() => {
      const trueOrFalse = Math.floor(Math.random() * 2);
      if(Boolean(trueOrFalse)) {
        setCount(count => count + 1)
      } else {
        setIsErr(true)
        setTimeout(() => {
          setIsErr(false)
        }, 2000)}
      }, 3000))
    return () =>  clearInterval(resOfReading)
  }, [])

  return(
    <SafeAreaView flex={1}>
      <StyledView flex={1} backgroundColor={'white'}>
        <Header headerData={headerData}/>
        <BasketInfo count={'9'} orderId={'25003900020001902003'}/>
        <StyledText marginBottom={'40px'} textAlign={'center'} fontSize={'150px'}>{count}</StyledText>
        <Signal marginVertical={10} alignSelf={'center'} width={100} height={100} fill={'#000'}/>
        <StyledText textAlign={'center'} fontSize={'18px'}>Reading RFDI...</StyledText>
        <InfoMessage
          text={!isErr ? 'Pull the trigger to stop reading' : 'Invalid barcode'}
          textColor={isErr ? '#fff' : '#013555'}
          bodyStyles={{
            position: 'absolute',
            width: windowSize.width * .9,
            top: windowSize.height * .8,
            alignSelf: 'center',
            paddingVertical: 20,
            borderColor: isErr ? '#b51b44' : '#013555',
            backgroundColor: isErr ? '#b51b44' : '#fff',
            borderWidth: 2,
            borderRadius: 10
          }}
        />
      </StyledView>
    </SafeAreaView>
  )
}

export default ScanCount