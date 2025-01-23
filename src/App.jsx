import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoPlayer from './components/videoPlayer';

const App = () => (
  <Router>
    <Routes>
      <Route path="/:id" element={<VideoPlayer />} />
    </Routes>
  </Router>
);

export default App;