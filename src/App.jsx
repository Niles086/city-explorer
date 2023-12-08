import { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'bootstrap';
import './App.css'
import RenderWeather from './components/weather';

const API_KEY = import.meta.env.VITE_API_KEY;
const SERVER = import.meta.env.VITE_SERVER;


export default function App() {
  const [location, setLocation] = useState({ display_name: 'info' });
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weatherReport, setWeatherReport] = useState([]);

  async function getLocation() {
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;

      const response = await axios.get(API);
      const data = response.data[0];
// console.log(data)
setLatitude(data.lat);
setLongitude(data.lon);
setLocation(data);
setError(null);
await getWeather(data.lat, data.lon);
} catch (error) {
      setError('An error occurred with the API call');
    }
  }


  async function getWeather(lat, lon) {
    console.log(SERVER)
// console.log(lat, lon)
    if (lat && lon) {

      try {
        const API = `http://localhost:3000/weather?&searchQuery=${searchQuery}`;
        console.log(API, lat, lon);
        const response = await axios.get(API);
        const query = response.data;
        setWeatherReport(query);
        console.log('This is the weather Report', query);
      }

      catch (error) {
        console.error('An error occurred with the API call', error);
        setWeatherReport([]);
      }
    }
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
        {error && (
          <Alert variant="danger" onClose={() => setError(null)} dismissible>
            {error}
          </Alert>
        )}
        {location.lat && location.lon && <img src={generateMap(location.lat, location.lon)}
          alt="map"
          style={{ maxWidth: '80%' }}

        />}
        <RenderWeather weatherReport={weatherReport}/>

      </>
    )

  
}