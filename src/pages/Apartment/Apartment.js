import { useState, useEffect } from "react";
import Style from "./Apartment.module.scss";
import { Main, Carousel, Tag, Rating, Collapse } from "../../components";
import { useParams } from "react-router-dom";
import { fetchApartment } from "../../api/api";
import Loading from "../../assets/loading.gif";

const Apartment = () => {
  const { id } = useParams();
  const [apartment, setApartment] = useState({});
  const [load, setLoad] = useState(false);

  // Call api for retrieve datas of apartment selected
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetchApartment(id);
        // Create state with data and add a new properties for manage picture displayed in carousel
        setApartment(response);
        setLoad(true);
      };
      fetchData().then();
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  return (
    <Main>
      {/* If load is false, display loader, else display cards */}
      {load ? (
        <>
          <Carousel apartment={apartment} setApartment={setApartment} />
          <div className={Style.apartmentHeader}>
            <div className={Style.titleContent}>
              <div>
                <h1>{apartment.title}</h1>
                <p>{apartment.location}</p>
              </div>
              <div>
                {apartment.tags.map((e, i) => (
                  <Tag key={`apartment${apartment.id}-${e}`} tag={e} />
                ))}
              </div>
            </div>
            <div className={Style.detailsContent}>
              <div className={Style.hostProfil}>
                <span>{apartment.host.name}</span>
                <img src={apartment.host.picture} alt="Hôte de l'appartement" />
              </div>
              <Rating number={apartment.rating} apartmentId={apartment.id} />
            </div>
          </div>
          <div className={Style.collapses}>
            <div className={Style.collapseBox}>
              <Collapse title="Description">
                <p>{apartment.description}</p>
              </Collapse>
            </div>
            <div className={Style.collapseBox}>
              <Collapse title="Equipements">
                <ul>
                  {apartment.equipments.map((e, i) => (
                    <li key={`apartment${apartment.id}-${e}${i}`}>{e}</li>
                  ))}
                </ul>
              </Collapse>
            </div>
          </div>
        </>
      ) : (
        <div className="loading">
          <img src={Loading} alt="Chargement..." />
        </div>
      )}
    </Main>
  );
};

export default Apartment;
