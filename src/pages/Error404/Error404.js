import Style from "./Error404.module.scss";
import { Main } from "../../components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Error404 = () => {
  // Adapt page title
  useEffect(() => {
    document.title = `Erreur 404 !`;
  }, []);

  return (
    <Main>
      <div className={Style.content}>
        <h1 className={Style.title}>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas</p>
        <Link to="/" className={Style.link}>
          Retourner sur la page d'accueil
        </Link>
      </div>
    </Main>
  );
};

export default Error404;
