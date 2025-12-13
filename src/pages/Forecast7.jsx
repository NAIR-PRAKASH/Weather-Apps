import React,{useState} from "react";
import SearchBar from "../Components/SearchBar";
import {useUnit} from "../context/UnitContext";
import {API_KEY}from "../config";

export default function Forecast7(){
  const [days,setDays]=useState([]);
  const[error, setError]=useState("");

  const fetchForecast = async(city)=>{
    setError("");
    setDays([]);

    const {unit} = useUnit();
    try{
      const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const r1 = await fetch(url1);
      const j1 = await r1.json();
      if(j1.cod !== 200){setError("city not found"); return;}

      const {lat,lon}=j1.coord;

      const url2 = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`;

      const r2 =  await fetch(url2);
      const  j2 = await r2.json();

      if(!j2.daily){setError("No Forecast"); return;}
      setDays(j2.daily.slice(0,7));

    }catch{
      setError("Network Error");
    }
  };


  return(
    <div className="min-h-screen bg-linear-to-b from-purple-300 to-purple-700 p-6 flex flex-col items-center text-white">

      <h1 className="text-4xl font-bold mt-4">7-Day Forecast</h1>
      
      <SearchBar onSearch={fetchForecast}/>
      
      {error && <p className="bg-red-600 px-4 py-2 mt-4 rounded">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 w-full max-w-4xl">

        {days.map((d,i)=>(
          <div key={i} className="tv-card p-4 rounded-xl text-center">
            <p className="text-lg font-bold">
              {new Date(d.dt * 1000).toDateString()}
            </p>
            <img src={`https://openweathermap.org/img/wn/${d.weather[0].icon}@4x.png`}
            className="mx-auto"/>
            <p className="text-3xl font-bold">{Math.round(d.temp.day)}°c</p>
            <p className="capitalize">{d.weather[0].description}</p>
            </div>
        ))}

      </div>

    </div>
  );
}
