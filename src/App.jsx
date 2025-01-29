import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";
import Navbar from "./components/Navbar";
import Terms from "./components/terms";
import Privacy from "./components/privacy";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/:username/:id" element={<VideoPlayer />} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/privacy" element={<Privacy/>} />
      </Routes>
    </Router>
  );
};

export default App;