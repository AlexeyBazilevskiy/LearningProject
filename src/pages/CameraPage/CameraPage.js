import React, {useState, useEffect} from 'react'
import { RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll'
import { accelerometer, setUpdateIntervalForType, SensorTypes } from "react-native-sensors";
import {Dimensions, Platform, SafeAreaView} from 'react-native'
import CustomButton from "../../commonComponents/complexedComponents/CustomButton/CustomButton";
import Gallery from "../../commonComponents/complexedComponents/Gallery/Gallery";
import {useDispatch, useSelector} from 'react-redux'
import {savePictures, saveLocalPictures} from "../../actions/actionCreator";
import NotifService from '../../notification/NotifService';
import StyledView from "../../commonComponents/lowLevelComponents/styledView";
import StyledText from "../../commonComponents/lowLevelComponents/styledText";

setUpdateIntervalForType(SensorTypes.accelerometer, 200); // defaults to 100ms

const CameraPage = () => {
  const [windowSize] = useState(Dimensions.get('window'))
  const [camera, setCamera] = useState(null)
  const dispatch = useDispatch()
  const {photoStore: {data}} = useSelector(store => store)
  const [notif] = useState(new NotifService())
  const [x, setX] = useState(0)

  useEffect(async () => {
    if(data.length === 0) {
      const data = await CameraRoll.getPhotos({first: 10})
      const uris = []
      data.edges.filter(item => uris.push(item.node.image.uri))
      dispatch(saveLocalPictures(uris))
    }
    const subscription = accelerometer.subscribe(
      ({x}) => {
        // const val = Platform.OS === "ios" ? Math.floor(x * (-90)) : Math.floor(x * 9)
        const val = Math.atan2(y_Buff , z_Buff) * 57.3;
        // const val = atan2((- x_Buff) , sqrt(y_Buff * y_Buff + z_Buff * z_Buff)) * 57.3;
        console.log(val);
        setX(val)
      },
      (err) => {
        console.log(err)
      },
    );
    return (() => subscription.unsubscribe())
  }, [])

  const onSnap = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      dispatch(savePictures(data.uri))
      notif.localNotif(null, null, null, 'Snap')
    }
  }

  return(
    <SafeAreaView flex={1}>
      <RNCamera
        ref={setCamera}
        width={windowSize.width}
        height={Platform.OS === 'ios' ? windowSize.height * .75 : windowSize.height * .75}
      />
      <CustomButton
        text={''}
        bodyStyles={{
          width: 70,
          height: 70,
          borderRadius: 70/2,
          borderWidth: 5,
          borderColor: 'white',
          backgroundColor: 'transparent',
          position: 'absolute',
          alignSelf: 'center',
          zIndex: 3,
          top: Platform.OS === 'ios' ? windowSize.height * .65 : windowSize.height * .65
        }}
        onPress={onSnap}
      />
      <StyledView
        width={'50%'}
        height={'5px'}
        backgroundColor={'white'}
        alignSelf={'center'}
        style={{position: 'absolute', top: windowSize.height * .5, transform: [{ rotate: `${x}deg` }]}}
      />
      <StyledText
        style={{
          position: 'absolute',
          top: windowSize.height * .52,
          zIndex: 3
        }}
        color={'black'}
        fontWeight={'bold'}
        alignSelf={'center'}
      >{Math.floor(x)} deg
      </StyledText>
      <Gallery
        contentContainerStyle={{flexDirection: 'row'}}
        styles={{position: 'absolute', top: Platform.OS === 'ios' ? windowSize.height * .75 : windowSize.height * .75}}
        isHorizontal={true}
      />
    </SafeAreaView>
  )
}

export default CameraPage
