import Style from "./Tag.module.scss";
import PropTypes from "prop-types";

const Tag = ({ tag }) => {
  return <span className={Style.tag}>{tag}</span>;
};

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
