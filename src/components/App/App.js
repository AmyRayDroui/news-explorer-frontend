import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import getArticles from '../../utils/NewsApi';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import SigningPopup from '../SigningPopup/SigningPopup';
import SignupPopup from '../SignupPopup/SignupPopup';
import Popup from '../Popup/Popup';
import Header from '../Header/Header';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ receivedArticles, setReceivedArticles] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isCardsSectionVisible, setIsCardsSectionVisible] = useState(false);
  const [isLoadingCards, setIsLoadingCards] = useState(false);
  const [isFoundCards, setIsFoundCards] = useState(false);
  const [isErrorSearchOccur, setIsErrorSearchOccur] = useState(false);
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

  async function handleSubmitSearch({keyword}) {
    setIsCardsSectionVisible(true);
    setIsLoadingCards(true);
    try {
      const articles = await getArticles(keyword);
      setIsErrorSearchOccur(false);
      if(articles.articles.length) {
        setSearchKeyword(keyword);
        setIsFoundCards(true);
        setReceivedArticles(articles.articles);
      } else {
        setIsFoundCards(false);
      }
    } catch(error) {
      setIsErrorSearchOccur(true);
    }
    finally {
      setIsLoadingCards(false);
    }
  }
  
  function handleSaveArticle({card}) {
    mainApi.addNewArticle(card);
  }



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header 
          isMobileNavOpen={isMobileNavOpen} 
          onClosePopups={closeAllPopups} 
          onOpenMobileNav={handleMobilePopupOpen}
          onOpenSigningPopup={handleSigningPopupOpen}
        />
        <Routes>
          <Route path='/saved-news' element={
            <SavedNews 
              isLoggedIn={isLoggedIn}
              isCardsSectionVisible={true}
              isLoadingCards={false}
              onSaveArticle={handleSaveArticle}
            />
          } />
          <Route path='/' element={
            <Main 
              onSubmitSearch={handleSubmitSearch}
              onSaveArticle={handleSaveArticle}
              isLoggedIn={isLoggedIn}
              isCardsSectionVisible={isCardsSectionVisible}
              isLoadingCards={isLoadingCards}
              isFoundCards={isFoundCards}
              isErrorSearchOccur={isErrorSearchOccur}
              articles={receivedArticles}
              keyword={searchKeyword}
            />
          } />
        </Routes>
        <Footer />
        <SigningPopup isOpen={isSigningPopupOpen} onClose={closeAllPopups} redirectOnClick={handleSignupPopupOpen}></SigningPopup>
        <SignupPopup isOpen={isSignupPopupOpen} onClose={closeAllPopups} redirectOnClick={handleSigningPopupOpen}></SignupPopup>
        <Popup isOpen={isMobileNavOpen} onClose={closeAllPopups} name='navbar' />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
