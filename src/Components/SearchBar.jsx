import React,{useState}from "react";

export default function SearchBar({onSearch}){
  const[city,setCity]=useState("");

  return(
    <div className="mt-20">
      <div className="flex shadow-lg rounded overflow-hidden">
        <input value={city} onChange={e=>setCity(e.target.value)}
        className="px-4 py-2 w-70 mt-0 text-blue-50" placeholder="Enter city"/><br/>

        <button onClick={()=>{if(city)onSearch(city);}}
          className="bg-blue-700 px-4 py-2 mt-0 hover:bg-amber-400 text-white cursor-pointer">Search</button>
      </div>
    </div>
  );
}