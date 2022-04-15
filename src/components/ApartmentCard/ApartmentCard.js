import Style from "./ApartmentCard.module.scss";

const ApartmentCard = ({ title, cover }) => {
  return (
    <div className={Style.card}>
      <img src={cover} alt="L'appartement en location" />
      <h2 className={Style.title}>{title}</h2>
    </div>
  );
};

export default ApartmentCard;
