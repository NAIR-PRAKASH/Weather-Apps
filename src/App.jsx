import React from "react";
import {Routes,Route,Link}from "react-router-dom";
import Home from "./pages/Home";
import Forecast7 from "./pages/Forecast7";

export default function App(){

  return (
    <div className="min-h-screen w-full">

      <nav className="w-full flex justify-center gap-6 py-4 text-blue-500 text-xl font-semibold bg-white/20 backdrop-blur-lg border-b border-white/30">
      <Link to="/" className="hover:underline">Today</Link>
      <Link to="/forecast" className="hover:underline">7-Day-Forecast</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/forecast" element={<Forecast7 />}/>
          </Routes>
    </div>
  );
}


