import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./screens/Header";
import Home from "./screens/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
