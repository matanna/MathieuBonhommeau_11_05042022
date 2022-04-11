import Style from "./Carousel.module.scss";
import { datas } from "../../datas/datas.js";

const Carousel = ({ apartment, setApartment }) => {
  console.log(apartment);
  return (
    <div className={Style.carousel}>
      <img src={apartment.pictures[0]} alt="" />
    </div>
  );
};

export default Carousel;
