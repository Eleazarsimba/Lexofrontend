import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class Locationmap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={7}
        style={mapStyles}
        initialCenter={
          {
            lat: -3.5107,
            lng: 39.9093
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB8fpcdl75xxiBvdBpivtiCr6AJiPHIYsY')
})(Locationmap);