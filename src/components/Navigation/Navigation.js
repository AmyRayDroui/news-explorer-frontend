import './Navigation.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


function Navigation({ mobileNavOpen, onLinkClick}) {
  const currPath = useLocation().pathname;
  const isLoggedIn = true;
  return (
    <nav className={`navigation ${mobileNavOpen && "navigation_type_mobile page__wrapper"}`}>
      <Link to='/' onClick={onLinkClick} className={ `navigation__link ${isLoggedIn && 'navigation__link_logged-in'} ${currPath !== '/saved-news' ? 'navigation__link_active' : 'navigation__link_color_black'}`}>Home</Link>
      { isLoggedIn ?
      <>
        <Link to='/saved-news' onClick={onLinkClick} className={`navigation__link navigation__link_logged-in ${currPath === '/saved-news' && 'navigation__link_active'}`}>Saved articles</Link>
        <button className={`navigation__button navigation__button_type_exit ${mobileNavOpen && 'navigation__button_type_mobile'}`}>
          <h3 className="navigation__exit-name">Elise</h3>
          <div className={`navigation__exit-icon ${ currPath === '/saved-news' && 'navigation__exit-icon_type_black'}`}></div>
        </button> 
      </>:
        <button className={`navigation__button navigation__button_type_sign-in ${mobileNavOpen && 'navigation__button_type_mobile'}`}>Sign in</button> 
      }
    </nav>
  );
}
  
  export default Navigation;