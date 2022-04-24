import Style from "./Banner.module.scss";
import PropTypes from "prop-types";

const Banner = ({ children, image, styleClass }) => {
  return (
    <section
      className={`${Style.banner} ${
        styleClass === null ? null : Style.bigInLittleScreen
      }`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </section>
  );
};

Banner.defaultProps = {
  styleClass: null,
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  styleClass: PropTypes.string,
};

export default Banner;
