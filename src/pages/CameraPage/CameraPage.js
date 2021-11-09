import React, {useState, useEffect} from 'react'
import { RNCamera } from 'react-native-camera';
import {PERMISSIONS, request} from "react-native-permissions";
import CameraRoll from '@react-native-community/cameraroll'
import {Dimensions, Platform, PermissionsAndroid, SafeAreaView} from 'react-native'
import CustomButton from "../../commonComponents/complexedComponents/CustomButton/CustomButton";
import Gallery from "../../commonComponents/complexedComponents/Gallery/Gallery";
import {useDispatch, useSelector} from 'react-redux'
import {savePictures, saveLocalPictures} from "../../actions/actionCreator";

const CameraPage = () => {
  const [windowSize] = useState(Dimensions.get('window'))
  const [camera, setCamera] = useState(null)
  const dispatch = useDispatch()
  const {photoStore: {data}} = useSelector(store => store)

  useEffect(async () => {
    if(data.length === 0) {
      const info = await CameraRoll.getPhotos({first: 10})
      const uris = info.edges.map(({node: {image: {uri}}}) => uri)
      dispatch(saveLocalPictures(uris))
    }
  }, [])

  const onSnap = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      dispatch(savePictures(data.uri))
    }
  }

  return(
    <SafeAreaView flex={1}>
      <RNCamera
        ref={setCamera}
        width={windowSize.width}
        height={Platform.OS === 'ios' ? windowSize.height * .75 : windowSize.height * .8}
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
          top: Platform.OS === 'ios' ? windowSize.height * .65 : windowSize.height * .7
        }}
        onPress={onSnap}
      />
      <Gallery
        data={data}
        contentContainerStyle={{flexDirection: 'row'}}
        styles={{position: 'absolute', top: Platform.OS === 'ios' ? windowSize.height * .75 : windowSize.height * .8}}
        isHorizontal={true}
      />
    </SafeAreaView>
  )
}

export default CameraPage
