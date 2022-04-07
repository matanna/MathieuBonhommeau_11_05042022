import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, About, Apartment, Error404 } from "../pages";
import { Header, Footer } from "../components";
import Style from "./Router.module.scss";

function Router() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/appartement/:id" element={<Apartment />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Router;
