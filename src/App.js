import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ParkingLot from "./ParkingLot";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parkinglot" element={<ParkingLot />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
