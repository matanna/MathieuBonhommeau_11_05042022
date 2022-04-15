import { Routes, Route } from "react-router-dom";
import { Home, About, Apartment, Error404 } from "../pages";
import { Header, Footer } from "../components";

function Router() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appartement/:id" element={<Apartment />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Router;
