import Style from "./Rating.module.scss";

export const Rating = ({ number, numberMax = 5, apartmentId }) => {
  let ratingTable = [];

  for (let i = 0; i < numberMax; i++) {
    ratingTable.push(
      <svg
        key={`apartment${apartmentId}-${i}`}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
          className={i < number ? Style.starRed : Style.starGrey}
        />
      </svg>
    );
  }

  return <div>{ratingTable}</div>;
};

export default Rating;
