import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
// nya raect-router-dom man har bytt ut Switch mot Routes. Och i  Route skall man göra som nedan
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
