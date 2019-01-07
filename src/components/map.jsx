import React from 'react';
import {
  GoogleMap,
  InfoWindow,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';
import mapStyle from '../utils/mapStyle';
import logo from '../images/logo-bm.jpg';

// const exampleMapStyles = [
//   {
//     featureType: 'all',
//     elementType: 'geometry.fill',
//     stylers: [
//       {
//         weight: '2.00'
//       }
//     ]
//   },
//   {
//     featureType: 'all',
//     elementType: 'geometry.stroke',
//     stylers: [
//       {
//         color: '#9c9c9c'
//       }
//     ]
//   },
//   {
//     featureType: 'all',
//     elementType: 'labels.text',
//     stylers: [
//       {
//         visibility: 'on'
//       }
//     ]
//   },
//   {
//     featureType: 'landscape',
//     elementType: 'all',
//     stylers: [
//       {
//         color: '#f2f2f2'
//       }
//     ]
//   },
//   {
//     featureType: 'landscape',
//     elementType: 'geometry.fill',
//     stylers: [
//       {
//         color: '#ffffff'
//       }
//     ]
//   },
//   {
//     featureType: 'landscape.man_made',
//     elementType: 'geometry.fill',
//     stylers: [
//       {
//         color: '#ffffff'
//       }
//     ]
//   },
//   {
//     featureType: 'poi',
//     elementType: 'all',
//     stylers: [
//       {
//         visibility: 'off'
//       }
//     ]
//   },
//   {
//     featureType: 'road',
//     elementType: 'all',
//     stylers: [
//       {
//         saturation: -100
//       },
//       {
//         lightness: 45
//       }
//     ]
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry.fill',
//     stylers: [
//       {
//         color: '#eeeeee'
//       }
//     ]
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#7b7b7b'
//       }
//     ]
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.stroke',
//     stylers: [
//       {
//         color: '#ffffff'
//       }
//     ]
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'all',
//     stylers: [
//       {
//         visibility: 'simplified'
//       }
//     ]
//   },
//   {
//     featureType: 'road.arterial',
//     elementType: 'labels.icon',
//     stylers: [
//       {
//         visibility: 'off'
//       }
//     ]
//   },
//   {
//     featureType: 'transit',
//     elementType: 'all',
//     stylers: [
//       {
//         visibility: 'off'
//       }
//     ]
//   },
//   {
//     featureType: 'water',
//     elementType: 'all',
//     stylers: [
//       {
//         color: '#46bcec'
//       },
//       {
//         visibility: 'on'
//       }
//     ]
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry.fill',
//     stylers: [
//       {
//         color: '#c8d7d4'
//       }
//     ]
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#070707'
//       }
//     ]
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.stroke',
//     stylers: [
//       {
//         color: '#ffffff'
//       }
//     ]
//   }
// ];

const MapComponent = withScriptjs(
  withGoogleMap(props => {
    return (
      <div>
        <GoogleMap
          defaultCenter={{ lat: 32.07699, lng: 34.77289 }}
          zoom={16}
          defaultOptions={{
            mapTypeControl: false,
            rotateControl: false,
            scrollwheel: false,
            fullscreenControl: false,
            disableDoubleClickZoom: false,
            streetViewControl: false,
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
