import React from "react";
import{useUnit}from "../context/UnitContext";

export default function unitToggle(){
  const {unit, toggleUnit} = useUnit();

  return(
    <div className="flex-items-center gap-2 mt-4">
      <span className={unit === "metric" ? "font-bold text-white" : "text-gray-300"}>
        °C
      </span>
<label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox"
  className="sr-only peer"
  checked={unit === "imperial"}
  onChange={toggleUnit}/>

<div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-blue-400 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"></div>
<div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5`}></div>

</label>
<span className={unit === "imperial" ? "font-bold text-white" : "text-gray-300"}>
  °F
</span>
    </div>
  );
}