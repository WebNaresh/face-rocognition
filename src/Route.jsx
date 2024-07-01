import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import ImageUrlFace from "./pages/ImageUrlFace/ImageUrlFace";
import ImageWithBackend from "./pages/ImageWithBackend/ImageWithBackend";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<About />} />
      <Route path="/url-to-face" element={<ImageUrlFace />} />
      <Route path="/image-with-backend" element={<ImageWithBackend />} />
    </Routes>
  );
};
export default App;
