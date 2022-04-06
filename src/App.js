import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, About, Apartment, Error404 } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/appartement/:id" element={<Apartment />} />
        <Route path="/a-propos" element={<About />} />
        <Route element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
