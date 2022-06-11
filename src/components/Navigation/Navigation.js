import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    const isLoggedIn = true;
    return (
      <div className="navigation page__wrapper">
          <h2 className='navigation__title'>NewsExplorer</h2>
          <nav className='navigation__container'>
            <NavLink to='/' className="navigation__link" activeClassName="navigation__link_active">Home</NavLink>
            { isLoggedIn && <NavLink to='/saved-news' className="navigation__link" activeClassName="navigation__link_active">Saved articles</NavLink>}
          </nav>
      </div>
    );
  }
  
  export default Navigation;