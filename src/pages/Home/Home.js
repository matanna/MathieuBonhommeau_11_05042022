import { useState, useEffect } from "react";
import { ApartmentCard, Main, Banner } from "../../components";
import Style from "./Home.module.scss";
import { fetchApartments } from "../../services/api";
import { Link } from "react-router-dom";
import Loading from "../../assets/loading.gif";
import homeBanner from "../../assets/homeBanner.png";

const Home = () => {
  let [apartments, setApartments] = useState({});
  // State for display loading gif when wiating services datas
  let [load, setLoad] = useState(false);

  // Adapt page title
  useEffect(() => {
    document.title = "Accueil";
  }, []);

  // Call services with datas only when the component is render the first time
  useEffect(() => {
    try {
      const fetchDatas = async () => {
        const response = await fetchApartments();
        setApartments(response);
        setLoad(true);
      };
      fetchDatas();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Main>
      {/* If load is false, display loader, else display cards */}
      {load ? (
        <>
          <Banner image={homeBanner}>
            <h1 className={Style.title}>Chez Vous, partout et ailleurs</h1>
          </Banner>
          <section className={Style.cardList}>
            {apartments.map((apartment) => (
              <Link key={apartment.id} to={`/appartement/${apartment.id}`}>
                <ApartmentCard
                  title={apartment.title}
                  cover={apartment.cover}
                />
              </Link>
            ))}
          </section>
        </>
      ) : (
        <div className="loading">
          <img src={Loading} alt="Chargement..." />
        </div>
      )}
    </Main>
  );
};

export default Home;
