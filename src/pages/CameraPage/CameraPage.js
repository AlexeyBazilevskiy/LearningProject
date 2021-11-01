import React, {useState, useEffect} from 'react'
import { RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll'
import {Dimensions, Platform, SafeAreaView} from 'react-native'
import CustomButton from "../../commonComponents/complexedComponents/CustomButton/CustomButton";
import Gallery from "../../commonComponents/complexedComponents/Gallery/Gallery";
import {useDispatch, useSelector} from 'react-redux'
import {savePictures, saveLocalPictures} from "../../actions/actionCreator";
import NotifService from '../../notification/NotifService';

const CameraPage = () => {
  const [windowSize] = useState(Dimensions.get('window'))
  const [camera, setCamera] = useState(null)
  const dispatch = useDispatch()
  const {photoStore: {data}} = useSelector(store => store)
  const [notif] = useState(new NotifService())

  useEffect(async () => {
    if(data.length === 0) {
      const data = await CameraRoll.getPhotos({first: 10})
      const uris = []
      data.edges.filter(item => uris.push(item.node.image.uri))
      dispatch(saveLocalPictures(uris))
    }
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
      <Gallery
        data={data}
        contentContainerStyle={{flexDirection: 'row'}}
        styles={{position: 'absolute', top: Platform.OS === 'ios' ? windowSize.height * .75 : windowSize.height * .75}}
        isHorizontal={true}
      />
    </SafeAreaView>
  )
}

export default CameraPage