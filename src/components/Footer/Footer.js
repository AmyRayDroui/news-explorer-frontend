import "./Footer.css";
import { NavLink } from "react-router-dom";
import githubIcon from "../../images/icons/github-icon.svg";
import facebookIcon from "../../images/icons/facebook-icon.svg";

function Footer() {
  return (
    <footer className="footer page__wrapper">
      <p className="footer__copyright">© 2023 Supersite, Powered by News API</p>
      <div className="footer__container footer__container_type_general">
        <nav className="footer__container footer__container_type_links">
          <NavLink exact="true" to="/" className="footer__link">
            Home
          </NavLink>
          <a
            href="https://www.practicum100.com/"
            target="_blank"
            className="footer__link"
          >
            Practicum by Yandex
          </a>
        </nav>
        <div className="footer__container footer__container_type_media">
          <a
            className="footer__media"
            href="https://github.com/AmyRayDroui/news-explorer-frontend"
          >
            <img
              className="footer__media-icon"
              src={githubIcon}
              alt="Github's logo"
            ></img>
          </a>
          <a
            className="footer__media"
            href="https://www.facebook.com/Practicum100IL"
          >
            <img
              className="footer__media-icon"
              src={facebookIcon}
              alt="Facebook's logo"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
