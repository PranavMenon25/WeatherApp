import SearchBox from './SearchBox'
import Infobox from './Infobox'
import { useState } from 'react'

export default function WeatherApp(){

    let [WeatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelLike: 35.79,
        humid: 84,
        max: 29.05,
        min: 29.05,
        temp: 29.05,
        weather: "broken clouds"
    })

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <Infobox info={WeatherInfo}/>
        </div>
    )
}