import Style from "./Collapse.module.scss";
import littleArrow from "../../assets/littleArrow.svg";
import { useEffect, useRef, useState } from "react";

const Collapse = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const paragraph = useRef(null);
  console.log(height);

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

export default Collapse;
