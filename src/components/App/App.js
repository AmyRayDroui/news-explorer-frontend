import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import getArticles from '../../utils/NewsApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Popup from '../Popup/Popup';
import Header from '../Header/Header';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    password: '',
    _id: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [receivedArticles, setReceivedArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isCardsSectionVisible, setIsCardsSectionVisible] = useState(false);
  const [isLoadingCards, setIsLoadingCards] = useState(false);
  const [isFoundCards, setIsFoundCards] = useState(false);
  const [isErrorSearchOccur, setIsErrorSearchOccur] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSigningPopupOpen, setIsSigningPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [globalError, setGlobalError] = useState('');



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

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const res = await mainApi.signup(email, password, name);
      if(res) {
        setGlobalError('');
        setIsSignupPopupOpen(false);
        setIsSigningPopupOpen(true);
        setEmail('');
        setPassword('');
        setName('');
        return;
      }
    } catch(err) {
      setGlobalError(err);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await mainApi.signin(email, password, name);
      if(res.token) {
        localStorage.setItem('jwt', res.token);
        mainApi.setHeader(localStorage.jwt);
      }
      const userInfo = await mainApi.getUserInfo();
      setCurrentUser({
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        _id: userInfo._id
      });
      setIsLoggedIn(true);
      setIsSigningPopupOpen(false);
    } catch(err) {
      setGlobalError(err);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          isLoggedIn={isLoggedIn}
          isMobileNavOpen={isMobileNavOpen} 
          onClosePopups={closeAllPopups} 
          onOpenMobileNav={handleMobilePopupOpen}
          onOpenSigningPopup={handleSigningPopupOpen}
        />
        <Routes>
          <Route path='/saved-news' element={
            <ProtectedRoute 
              isLoggedIn={isLoggedIn}
              element={SavedNews}>
              isCardsSectionVisible={true}
              isLoadingCards={false}
              savedArticles={savedArticles}
              onSaveArticle={handleSaveArticle}
            </ProtectedRoute>
          } />
          <Route path='/' element={
            <Main 
              onSubmitSearch={handleSubmitSearch}
              onSaveArticle={handleSaveArticle}
              isLoggedIn={isLoggedIn}
              savedArticles={savedArticles}
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
        <Login 
          onSubmit={handleLogin}
          isOpen={isSigningPopupOpen} 
          onClose={closeAllPopups} 
          redirectOnClick={handleSignupPopupOpen} 
          setEmail={setEmail}
          setPassword={setPassword}
          globalError={globalError}
        />
        <Register 
          onSubmit={handleRegister}
          isOpen={isSignupPopupOpen} 
          onClose={closeAllPopups} 
          redirectOnClick={handleSigningPopupOpen}
          setEmail={setEmail}
          setPassword={setPassword}
          setName={setName}
          globalError={globalError}
        />
        <Popup isOpen={isMobileNavOpen} onClose={closeAllPopups} name='navbar' />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
