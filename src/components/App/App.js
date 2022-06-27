import './App.css';
import { useState } from 'react';
import { Routes, Route, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import SigningPopup from '../SigningPopup/SigningPopup';
import SignupPopup from '../SignupPopup/SignupPopup';
import Popup from '../Popup/Popup';
import Header from '../Header/Header';

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSigningPopupOpen, setIsSigningPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);

  function closeAllPopups() {
    setIsMobileNavOpen(false);
    setIsSigningPopupOpen(false);
    setIsSignupPopupOpen(false);
  }

  function handleMobilePopupOpen() {
    setIsMobileNavOpen(true);
  }

  function handleSigningPopupOpen() {
    closeAllPopups();
    setIsSigningPopupOpen(true);
  }

  function handleSignupPopupOpen() {
    closeAllPopups();
    setIsSignupPopupOpen(true);
  }


  return (
    <div className="page">
      <Header 
        isMobileNavOpen={isMobileNavOpen} 
        onClosePopups={closeAllPopups} 
        onOpenMobileNav={handleMobilePopupOpen}
        onOpenSigningPopup={handleSigningPopupOpen}
      />
      <Routes>
        <Route path='/saved-news' element={<SavedNews/>} />
        <Route path='/' element={<Main/>} />
      </Routes>
      <Footer />
      <SigningPopup isOpen={isSigningPopupOpen} onClose={closeAllPopups} redirectOnClick={handleSignupPopupOpen}></SigningPopup>
      <SignupPopup isOpen={isSignupPopupOpen} onClose={closeAllPopups} redirectOnClick={handleSigningPopupOpen}></SignupPopup>
      <Popup isOpen={isMobileNavOpen} onClose={closeAllPopups} name='navbar' />
    </div>
  );
}

export default App;
