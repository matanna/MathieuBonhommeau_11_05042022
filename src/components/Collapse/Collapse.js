import Style from "./Collapse.module.scss";
import littleArrow from "../../assets/littleArrow.svg";

const Collapse = ({ title, children }) => {
  return (
    <div className={Style.collapseBox}>
      <div className={Style.title}>
        {title}
        <img src={littleArrow} alt="Open collapse" />
      </div>
      <div className={Style.content}>{children}</div>
    </div>
  );
};

export default Collapse;
