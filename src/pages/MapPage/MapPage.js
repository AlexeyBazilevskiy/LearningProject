import React, {useState, useEffect} from 'react'
import {Dimensions, TouchableWithoutFeedback} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {PERMISSIONS, request} from "react-native-permissions";
import StyledText from "../../commonComponents/lowLevelComponents/styledText";
import I18nJs from "../../language/strings";
import CustomCallout from "./components/CustomCallout/CustomCallout";

const MapPage = ({navigation}) => {
  const [windowSize] = useState(Dimensions.get('window'))
  const [currentPosition, setCurrentPosition] = useState(null)
  const [region] = useState({
    latitude: 47.8388,
    longitude: 35.139567,
    latitudeDelta: 0.1922,
    longitudeDelta: 0.0421,
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
        setCurrentPosition({latitude: position.coords.latitude, longitude: position.coords.longitude})
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, [])

  return (
    <MapView
      width={windowSize.width}
      height={windowSize.height}
      region={region}
    >
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
  )
}

export default MapPage