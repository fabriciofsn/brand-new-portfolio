import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./screens/Header";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Skills from "./screens/Skills";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
