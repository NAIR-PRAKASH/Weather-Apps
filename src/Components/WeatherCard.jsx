import React from "react";
import {useUnit} from "../context/UnitContext";

export default function WeatherCard({data}){
  const{unit} = useUnit();
  const tempUnit = unit === "metric" ? "°C" : "°F";

  return(
    <div className="tv-card rounded-2xl p-6 mt-4 text-shadow-white max-w-md w-full">

      <h2 className="text-center text-3xl font-bold">{data.name}</h2>

const {unit} = useUnit();

{Math.round(data.main.temp)} {unit === "metric" ? "°C":"°F"}
      <div className="flex flex-col items-center mt-4">
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}/>
        <p className="text-6xl font-bold">{Math.round(data.main.temp)}°c</p>
        <p className="text-lg capitalize">{data.weather[0].description}</p>

        <div className="grid grid-cols-2 gap-4 mt-6 w-full text-center">
          <div>Humidity  <br/><strong>{data.main.humidity}%</strong></div>
          <div>Wind<br/><strong>{data.wind.speed} {unit === "metric" ? "m/s" : "mph"}m/s</strong></div>
        </div>
      </div>
    </div>
  );

}
