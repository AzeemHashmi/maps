import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);

    // Initialize the map
    window.initMap = () => {
      new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
    };

    return () => {
      // Clean up function to remove the script when the component unmounts
      document.body.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
}

export default App;
