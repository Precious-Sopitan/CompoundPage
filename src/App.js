import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPAge from "./Pages/LandingPage/LandingPAge";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPAge />} />
    </Routes>
  );
};

export default App;
