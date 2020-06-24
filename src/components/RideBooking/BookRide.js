/*global google*/
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';

// const directionsService = new google.maps.DirectionsService();

class BookRide extends Component {
  state = {
    directions: null,
  }
  calcRoute = () => {
    const origin = { lat: 40.756795, lng: -73.954298 } || document.getElementById('start').value;
    const destination = { lat: 41.756795, lng: -78.954298 } || document.getElementById('end').value;
    new google.maps.DirectionsService().route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          })
          console.log(result)
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    )
  }
  render() {
    // const directionsService = new google.maps.DirectionsService();
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      >
        <DirectionsRenderer
          directions={this.state.directions}
        />
      </GoogleMap>
    ))

    return (
      <div>
        <h1>Book A Ride</h1>
        <div>
          <strong>Start: </strong>
          <select id="start" onChange={this.calcRoute}>
            <option value="chicago, il">Chicago</option>
            <option value="st louis, mo">St Louis</option>
            <option value="joplin, mo">Joplin, MO</option>
            <option value="oklahoma city, ok">Oklahoma City</option>
            <option value="amarillo, tx">Amarillo</option>
            <option value="gallup, nm">Gallup, NM</option>
            <option value="flagstaff, az">Flagstaff, AZ</option>
            <option value="winona, az">Winona</option>
            <option value="kingman, az">Kingman</option>
            <option value="barstow, ca">Barstow</option>
            <option value="san bernardino, ca">San Bernardino</option>
            <option value="los angeles, ca">Los Angeles</option>
          </select>
          <strong>End: </strong>
          <select id="end" onChange={this.calcRoute}>
            <option value="chicago, il">Chicago</option>
            <option value="st louis, mo">St Louis</option>
            <option value="joplin, mo">Joplin, MO</option>
            <option value="oklahoma city, ok">Oklahoma City</option>
            <option value="amarillo, tx">Amarillo</option>
            <option value="gallup, nm">Gallup, NM</option>
            <option value="flagstaff, az">Flagstaff, AZ</option>
            <option value="winona, az">Winona</option>
            <option value="kingman, az">Kingman</option>
            <option value="barstow, ca">Barstow</option>
            <option value="san bernardino, ca">San Bernardino</option>
            <option value="los angeles, ca">Los Angeles</option>
          </select>
          <div>
            {this.state.directions ? <p>your ride is booked .Have a Safe Journey </p> : null}
            <GoogleMapExample
              containerElement={<div style={{ height: `500px`, width: '500px' }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default BookRide;