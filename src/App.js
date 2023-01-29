import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';
import React from 'react';
import image from './Images/testImage.jpg';
import InfoBucket from './Components/InfoBucket';
import UserInput from './Components/UserInput';
import WeatherInfo from './Components/WeatherInfo';

function App() {

  console.log(process.env.REACT_APP_WEATHER_API_KEY);

  const [data, setData] = useState({});
  const [city, setCity] = useState('');
  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`;

  const [imgSearch, setImgSearch] = useState('');
  const [background, setBackGround] = useState(image);
  const imgApiKey = process.env.REACT_APP_IMAGE_API_KEY;
  const imgUrl = `https://api.unsplash.com/search/photos?query=${imgSearch}&client_id=${imgApiKey}&auto=format`;

  const fetchImage = () => {
    const random = (Math.floor(Math.random() * 10) + 1);

    if (imgSearch.length > 0) {
      Axios.get(imgUrl).then((res) => {
        console.log(res);
        setBackGround(res.data.results[random].urls.raw);
        console.log('FetchImage: ' + imgSearch);
      })
    }
  }

  useEffect(() => {
    fetchImage();
  }, [data])

  const fetchData = () => {
    Axios.get(url).then((res) => {
      console.log(res);
      setData(res.data);
      setImgSearch(res.data.weather[0].description);
      console.log('fetchdata: ' + imgSearch);
    })
  }

  const backGroundStyles = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <main style={backGroundStyles}>
      <div className='wrapper'>

        <UserInput
          onChange={(event) => setCity(event.target.value)}
          onClick={fetchData}
        />

        <WeatherInfo
          town={Date.name}
          temp={data.main ? (1.8 * (data.main.temp - 273) + 32).toFixed(0) : 0}
          description={data.main ? data.weather[0].description : 0}
        />

        <InfoBucket
          humidity={data.main ? data.main.humidity : 0}
          windSpeed={data.main ? data.wind.speed : 0}
          feelsLike={data.main ? (1.8 * (data.main.feels_like - 273) + 32).toFixed(0) : 0}
          lat={data.main ? data.coord.lat : 0}
          seaLevel={data.main ? data.main.sea_level : 0}
          lon={data.main ? data.coord.lon : 0}
        />

      </div>
    </main>
  )

}

export default App;
