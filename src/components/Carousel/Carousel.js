import { useState, useEffect, useRef } from "react";
import Style from "./Carousel.module.scss";
import PropTypes from "prop-types";

const Carousel = ({ apartment }) => {
  const diapos = [...apartment.pictures, ...apartment.pictures.slice(0, 1)];
  const [position, setPosition] = useState(Math.floor(diapos.length / 2));
  const [nav, setNav] = useState({
    isEnd: true,
    direction: "",
  });

  const [width, setWidth] = useState(0);

  let transform = {
    transform: `translateX(-${position * width}px)`,
  };

  // Ref for retrieve the width of the carousel box
  const diaposBox = useRef(null);
  useEffect(() => {
    setWidth(diaposBox.current.offsetWidth);
  }, [width]);

  // For move diapo which is in front at the beginning or at the end without the user seeing it
  useEffect(() => {
    if (position === diapos.length - 1 && nav.direction === "right") {
      let timer1 = setTimeout(() => {
        setPosition(0);
        setNav({ ...nav, isEnd: true });
      }, 300);
      return () => {
        clearTimeout(timer1);
      };
    }
    if (position === 0 && nav.direction === "left") {
      let timer2 = setTimeout(() => {
        setPosition(diapos.length - 1);
        setNav({ ...nav, isEnd: true });
      }, 300);
      return () => {
        clearTimeout(timer2);
      };
    }
  }, [diapos.length, nav, position]);

  // Handle click on next arrow
  const handleNext = () => {
    setPosition(position + 1);
    setNav({
      isEnd: false,
      direction: "right",
    });
  };

  // Handle click on prev arrow
  const handlePrev = () => {
    setPosition(position - 1);
    setNav({
      isEnd: false,
      direction: "left",
    });
  };

  return (
    <div className={Style.carousel} ref={diaposBox}>
      <span
        role="button"
        onClick={() => handlePrev()}
        className={`${Style.arrow} ${Style.arrowLeft}`}
      >
        {apartment.pictures.length > 1 && (
          <svg
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312V7.78312Z"
              fill="white"
            />
          </svg>
        )}
      </span>
      {
        <div
          className={
            nav.isEnd ? Style.imgsBox : `${Style.imgsBox} ${Style.move}`
          }
          style={transform}
        >
          {diapos.map((e, i) => (
            <div className={Style.imgBox} key={`${apartment.id}-picture${i}`}>
              <img src={e} alt="Pièces de l'apartement" />
            </div>
          ))}
        </div>
      }

      <span
        role="button"
        onClick={() => handleNext()}
        className={`${Style.arrow} ${Style.arrowRight}`}
      >
        {apartment.pictures.length > 1 && (
          <svg
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

Carousel.propTypes = {
  apartment: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
    pictures: PropTypes.array,
    description: PropTypes.string,
    host: PropTypes.exact({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
    rating: PropTypes.string,
    location: PropTypes.string,
    equipments: PropTypes.array,
    tags: PropTypes.array,
  }).isRequired,
};

export default Carousel;
