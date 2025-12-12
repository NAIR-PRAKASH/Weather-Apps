import React,{useState}from"react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";
import{API_KEY} from "../config";

import{useUnit} from "../context/UnitContext";

export default function Home(){
  const [data, setData]=useState(null);
  const[loading,setLoading]=useState(false);
  const[error, setError]=useState("");

  const fetchWeather = async(city)=>{
    setLoading(true); 
    setError(""); 
    setData(null);

    try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

      const res = await fetch(url);
      const json = await res.json();

      if(json.cod === 200) {
        setData(json);
      }else{
        setError(json.message || "Not Found");
      }

    }catch{
      setError("Network error");
    }finally{
      setLoading(false);
    }
  };

  const {unit} = useUnit();
  const getBgclass =()=>{
    if(!data || !data.weather || !data.weather[0])return "linear-gradient(to bottom, #60a5fa, #1e3a8a)";

    const m = data.weather[0].main.toLowerCase();
    switch(m) {
      case "clouds": return "linear-gradient(to bottom, #9ca3af, #4b5563)";
      case"rain": 
      case "drizzle": return "linear-gradient(to bottom, #2563eb, #1f2937)";
      case "snow": return "linear-gradient(to bottom, #ffffff, #d1d5db)";
      case "clear": return "linear-gradient(to bottom, #fcd34d, #3b82f6)";
      default: return "linear-gradient(to bottom, #60a5fa, #1e3a8a)";
    }
  };

  return(
    <div
    className="min-h-screen flex flex-col items-center p-6 relative"
      style={{background:getBgclass()}}> 
      
      
      <h1 className="text-white text-4xl font-bold mt-6">Today's Weather</h1>

      <SearchBar onSearch={fetchWeather}/>

      {loading&&<Loading/>}
      {error && <ErrorBox message={error}/>}
      {data && <WeatherCard data={data}/>}
    </div>
    
  );
}