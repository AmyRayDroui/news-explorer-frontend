import './Header.css';
import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';


function Header({isLoggedIn, isMobileNavOpen, onClosePopups, onOpenMobileNav, onOpenSigningPopup, onLogout}) {

  const currPath = useLocation().pathname;

  function handleMobilePopupToggle() {
    if(isMobileNavOpen) {
      onClosePopups();
    } else {
      console.log(typeof(onOpenMobileNav))
      onOpenMobileNav();
    }
  }

  return (
    <header className={ `header page__wrapper ${currPath==='/saved-news' && "header_type_black-font"} ${isMobileNavOpen && "header_mobile-nav"}` }>
      <h2 className='header__title'>NewsExplorer</h2>
      <button onClick={handleMobilePopupToggle} className={`header__mobile-button ${ currPath === '/saved-news' && 'header__mobile-button_color_black'} ${isMobileNavOpen && "header__mobile-button_type_close"}`}></button>
      <Navigation isLoggedIn={isLoggedIn} mobileNavOpen={isMobileNavOpen} onLinkClick={onClosePopups} onOpenSigningPopup={onOpenSigningPopup} onLogout={onLogout}/>
    </header>
  );
  }
  
  export default Header;