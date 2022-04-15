import Style from "./Main.module.scss";

export const Main = ({ children }) => {
  return <main className={Style.main}>{children}</main>;
};

export default Main;
