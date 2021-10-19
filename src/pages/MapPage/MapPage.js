import React, {useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {PERMISSIONS, request} from "react-native-permissions";

const MapPage = () => {
  const [windowSize] = useState(Dimensions.get('window'))
  const [currentPosition, setCurrentPosition] = useState(null)
  const [region, setRegion] = useState({
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
        // See error code charts below.
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
      />
      {currentPosition && <Marker
        coordinate={currentPosition}
      />}
    </MapView>
  )
}

export default MapPage