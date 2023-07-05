// import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import ViewTrain from "./components/ViewTrain";
// import axios from "axios";
import Read from "./components/read";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Router>
      <div className="items-center justify-center flex p-10">
        {/* <h2 className="text-3xl text-center">Train Problem </h2> */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/trains" element={<Read />} />
          <Route
            path="/view/:tname"
            element={<ViewTrain />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
