import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Searchbar1 from "./searchbar1";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Searchbar1 />} />
      </Routes>
    </Router>
  );
};

export default App;
