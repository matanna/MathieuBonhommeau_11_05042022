import Style from "./ApartmentCard.module.scss";
import PropTypes from "prop-types";

const ApartmentCard = ({ title, cover }) => {
  return (
    <div className={Style.card}>
      <img src={cover} alt="L'appartement en location" />
      <h2 className={Style.title}>{title}</h2>
    </div>
  );
};

ApartmentCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default ApartmentCard;
