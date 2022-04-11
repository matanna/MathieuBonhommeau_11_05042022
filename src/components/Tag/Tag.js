import Style from "./Tag.module.scss";

const Tag = ({ tag }) => {
  return <span className={Style.tag}>{tag}</span>;
};

export default Tag;
