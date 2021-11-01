import React, {useState, useEffect} from 'react'
import {Dimensions} from 'react-native';
import MapView, {Marker, Callout, Polyline} from 'react-native-maps';
import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {PERMISSIONS, request} from "react-native-permissions";
import StyledText from "../../commonComponents/lowLevelComponents/styledText";
import I18nJs from "../../language/strings";
import CustomCallout from "./components/CustomCallout/CustomCallout";
import CustomButton from "../../commonComponents/complexedComponents/CustomButton/CustomButton";
import StyledView from "../../commonComponents/lowLevelComponents/styledView";

const MapPage = ({navigation}) => {
  const [windowSize] = useState(Dimensions.get('window'))
  const [currentPosition, setCurrentPosition] = useState(null)
  const [arrayOfCurrentPos, setArrayOfCurrentPos] = useState([])
  const [isTracking, setIsTracking] = useState(false)
  const [region] = useState({
    latitude: 47.8388,
    longitude: 35.139567,
    latitudeDelta: 0.0095,
    longitudeDelta: 0.00021,
  })
  useEffect(async () => {
    if (Platform.OS === 'ios') {
      await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)

    } else {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
    }
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        setCurrentPosition({latitude: position.coords.latitude, longitude: position.coords.longitude})
        const arr = [...arrayOfCurrentPos, {latitude: position.coords.latitude, longitude: position.coords.longitude}]
        setArrayOfCurrentPos(arr)
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, [])

  const onToggleSaveWay = () => {
    let timer
    if(!isTracking){
      setIsTracking(true)
      Geolocation.watchPosition((position) => {
        const array = [...arrayOfCurrentPos]
        console.log(array);
        array.push({latitude: position.coords.latitude, longitude: position.coords.longitude})
        setArrayOfCurrentPos(array)
      })
    }
    else{
      setIsTracking(false)
      setArrayOfCurrentPos([])
      Geolocation.clearWatch(timer)
    }
  }
  console.log('ee', arrayOfCurrentPos);
  return (
    <StyledView flex={1}>
      <MapView
        width={windowSize.width}
        height={windowSize.height}
        region={region}
      >
        {arrayOfCurrentPos.length >= 2 && <Polyline
          coordinates={arrayOfCurrentPos}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#7F0000',
          ]}
          strokeWidth={4}
        />}
        <Marker
          coordinate={{
            latitude: 47.8388,
            longitude: 35.139567,
          }}
        >
          <Callout>
            <StyledText>{I18nJs.t('randomLocationText')}</StyledText>
          </Callout
            >
        </Marker>
        {currentPosition &&
          <Marker
            coordinate={currentPosition}
          >
            <Callout
              tooltip
              onPress={() => navigation.navigate(I18nJs.t('webViewHeader'), {
                url: `https://www.google.com/maps/search/${currentPosition.latitude},+${currentPosition.longitude}`
              })}
            >
              <CustomCallout navigation={navigation} text={I18nJs.t('yourLocationText')} />
            </Callout>
          </Marker>
        }
      </MapView>
      <CustomButton
        onPress={onToggleSaveWay}
        bodyStyles={{borderRadius: 20, position: 'absolute', top: windowSize.height * .8, alignSelf: 'center', padding: 10, flex: 1, backgroundColor: 'green'}}
        text={isTracking ? I18nJs.t('finishTracking') : I18nJs.t('startTracking')}
        textStyles={{color: 'white'}}
      />
    </StyledView>
  )
}

export default MapPage