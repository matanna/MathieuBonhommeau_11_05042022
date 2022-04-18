import Style from "./Collapse.module.scss";
import littleArrow from "../../assets/littleArrow.svg";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

const Collapse = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const paragraph = useRef(null);

  const style = {
    height: `${height}px`,
  };

  const handleClick = () => {
    if (open) {
      setOpen(false);
      setHeight(0);
    } else {
      setOpen(true);
      setHeight(paragraph.current.offsetHeight);
    }
  };

  return (
    <div className={Style.collapseBox}>
      <div className={Style.title}>
        {title}
        <img
          src={littleArrow}
          onClick={() => handleClick()}
          alt="Open collapse"
          className={open ? Style.up : Style.down}
        />
      </div>
      <div className={`${Style.contentBox} ${Style.animate}`} style={style}>
        <div
          ref={paragraph}
          className={
            open
              ? `${Style.content} ${Style.open}`
              : `${Style.content} ${Style.close}`
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Collapse;
