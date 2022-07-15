import './Navigation.css';
import React, { useState, useContext } from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import { Link, useLocation } from 'react-router-dom';


function Navigation({ isLoggedIn, mobileNavOpen, onLinkClick, onOpenSigningPopup, onLogout}) {
  const currentUser = useContext(CurrentUserContext);
  const currPath = useLocation().pathname;

  return (
    <nav className={`navigation ${mobileNavOpen && "navigation_type_mobile page__wrapper"}`}>
      <Link to='/' onClick={onLinkClick} className={ `navigation__link ${isLoggedIn && 'navigation__link_logged-in'} ${currPath !== '/saved-news' ? 'navigation__link_active' : 'navigation__link_color_black'}`}>Home</Link>
      { isLoggedIn ?
      <>
        <Link to='/saved-news' onClick={onLinkClick} className={`navigation__link navigation__link_logged-in ${currPath === '/saved-news' && 'navigation__link_active'}`}>Saved articles</Link>
        <button onClick={onLogout} className={`navigation__button navigation__button_type_exit ${mobileNavOpen && 'navigation__button_type_mobile'}`}>
          <h3 className="navigation__exit-name">{currentUser.name}</h3>
          <div className={`navigation__exit-icon ${ currPath === '/saved-news' && 'navigation__exit-icon_color_black'}`}></div>
        </button> 
      </>:
        <button onClick={onOpenSigningPopup} className={`navigation__button navigation__button_type_sign-in ${mobileNavOpen && 'navigation__button_type_mobile'}`}>Sign in</button> 
      }
    </nav>
  );
}
  
  export default Navigation;