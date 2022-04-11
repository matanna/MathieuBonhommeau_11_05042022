import Style from "./Banner.module.scss";

const Banner = ({ children, image }) => {
  console.log(image);
  return (
    <section
      className={Style.banner}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </section>
  );
};

export default Banner;
