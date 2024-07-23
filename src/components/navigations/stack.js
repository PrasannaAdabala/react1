import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Homescreen1 from "./homescreen";
import Aboutscreen1 from "./about";
import Contactscreen1 from "./contactscreen";


function Stack() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Homescreen1/>} />
        <Route path="/about" element={<Aboutscreen1/>} />
        <Route path="/contact" element={<Contactscreen1/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default Stack;
