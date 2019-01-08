/* eslint-disable no-undef */

import React from 'react';
import {
  GoogleMap,
  InfoWindow,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';
import mapStyle from '../../utils/mapStyle';
import logo from '../../images/logo-bm.jpg';

const MapComponent = withScriptjs(
  withGoogleMap(props => {
    return (
      <div>
        <GoogleMap
          defaultCenter={{ lat: 32.07699, lng: 34.77289 }}
          zoom={15}
          defaultOptions={{
            mapTypeControl: false,
            rotateControl: false,
            scrollwheel: false,
            fullscreenControl: false,
            disableDoubleClickZoom: false,
            streetViewControl: false,
            zoomControl: true,
            zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_BOTTOM
            },
            styles: mapStyle
          }}>
          <InfoWindow position={{ lat: 32.07699, lng: 34.77289 }}>
            <div className="info-window">
              <img src={logo} alt="logo" height="50px" width="50px" />
            </div>
          </InfoWindow>
        </GoogleMap>
      </div>
    );
  })
);
export default MapComponent;
