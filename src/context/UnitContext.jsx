import React,{createContext,useState,useContext}from "react";

//create Context
const unitContext = createContext();

//Provider Component
export function UnitProvider({children}){
  const[unit, setUnit] = useState("metric");

  //Toggle function
  const toggleUnit = ()=>{
    setUnit((prev)=> (prev === "metric" ? "imperial" :"metric"));
  };

  return(
    <unitContext.Provider value={{unit, toggleUnit}}>{children}</unitContext.Provider>
  );
};

export function useUnit(){
return useContext(unitContext);
}