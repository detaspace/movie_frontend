import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/video/:id" element={<VideoPlayer />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;