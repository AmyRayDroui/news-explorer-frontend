import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    const isLoggedIn = true;
    return (
      <div className="navigation page__wrapper">
          <h2 className='navigation__title'>NewsExplorer</h2>
          <nav className='navigation__container'>
            <NavLink to='/' className={ isLoggedIn ? "navigation__link navigation__link_logged-in" : "navigation__link" } activeClassName="navigation__link_active">Home</NavLink>
            { isLoggedIn && <NavLink to='/saved-news' className="navigation__link navigation__link_logged-in" activeClassName="navigation__link_active">Saved articles</NavLink>}
            { isLoggedIn ? 
              <button className="navigation__button navigation__button_type_exit">
                <h3 className="navigation__exit-name">Elise</h3>
                <div className='navigation__exit-icon'></div>
              </button> :
              <button className="navigation__button navigation__button_type_sign-in">Sign in</button> 
            }
          </nav>
      </div>
    );
  }
  
  export default Navigation;