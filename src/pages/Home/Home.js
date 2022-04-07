import React from "react";
import { Banner } from "../../components";
import Style from "./Home.module.scss";

const Home = () => {
  return (
    <main className={Style.main}>
      <Banner />
    </main>
  );
};

export default Home;
