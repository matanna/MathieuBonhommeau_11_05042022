import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, About, Apartment, Error404 } from "../pages";
import Style from "./Router.module.scss";

function Router() {
  return (
    <div className="Router">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/appartement/:id" element={<Apartment />} />
        <Route path="/a-propos" element={<About />} />
        <Route element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Router;
