import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currPath = useLocation().pathname;
  const isLoggedIn = true;
  return (
    <div className={ currPath==='/saved-news' ? "navigation page__wrapper navigation_type_black-font" : "navigation page__wrapper"}>
        <h2 className='navigation__title'>NewsExplorer</h2>
        <nav className='navigation__container'>
          <Link to='/' className={ `navigation__link ${isLoggedIn && 'navigation__link_logged-in'} ${currPath !== '/saved-news' ? 'navigation__link_active' : 'navigation__link_type_black'}`}>Home</Link>
          { isLoggedIn ?
          <>
            <Link to='/saved-news' className={`navigation__link navigation__link_logged-in ${currPath === '/saved-news' && 'navigation__link_active'}`}>Saved articles</Link>
            <button className="navigation__button navigation__button_type_exit">
              <h3 className="navigation__exit-name">Elise</h3>
              <div className={`navigation__exit-icon ${ currPath === '/saved-news' && 'navigation__exit-icon_type_black'}`}></div>
            </button> 
          </>:
            <button className="navigation__button navigation__button_type_sign-in">Sign in</button> 
          }
        </nav>
    </div>
  );
}
  
  export default Navigation;