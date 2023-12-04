import { useState } from 'react'
import axios from 'axios';
import './App.css'

const API_KEY = import.meta.env.VITE_API_KEY;



export default function App() {
  const [location, setLocation] = useState({ display_name: 'info' });
  const [searchQuery, setSearchQuery] = useState('');

  async function getLocation() {
    let API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
   
    const response = await axios.get(API);
    const data = response.data[0];
   
    setLocation(data);
  }


  function onSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  function searchLocation(event) {
    event.preventDefault();
    getLocation();
    setSearchQuery({ display_name: searchQuery });
  }
function generateMap(lat, lon) {
  const API2 = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${lat},${lon}&zoom=10`;
  return API2;
}
  return (
    <>
      <input onChange={onSearchChange} />
      <button onClick={searchLocation}>Search</button>
      <h2>The city is:{location.display_name}</h2>
      <h2>Latitude:{location.lat}</h2> <h2>Longitude:{location.lon}</h2>
      {location.lat && location.lon && <img src={generateMap(location.lat, location.lon)} 
      alt="map"
      style={{maxWidth: '80%'}}
      />}

    </>
  )
}
