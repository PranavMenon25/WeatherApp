import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
// import { API_KEY } from './temp';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState('');
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;
    let getWeatherInfo = async ()=>{
        console.log(city);
        let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let resjson = await res.json();
        let result = {
            city: city,
            temp: resjson.main.temp,
            min: resjson.main.temp_min,
            max: resjson.main.temp_max,
            humid: resjson.main.humidity,
            feelLike: resjson.main.feels_like,
            weather: resjson.weather[0].description
        };
        console.log(result);
        updateInfo(result);
    }


    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = (event) => { 
        event.preventDefault();
        console.log(city);
        getWeatherInfo();
        setCity('');
    }
    return (
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>   <br></br>
                <Button variant="contained" type="Submit" >Search</Button>
            </form>
        </div>
    )
}