import Style from "./Banner.module.scss";

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

export default Banner;
