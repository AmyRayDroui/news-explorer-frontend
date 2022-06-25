import './App.css';
import { useState } from 'react';
import { Routes, Route, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import SigningPopup from '../SigningPopup/SigningPopup';
import SignupPopup from '../SignupPopup/SignupPopup';

function App() {
  
  return (
    <div className="page">
      <Routes>
        <Route path='/saved-news' element={<SavedNews />} />
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
      <SigningPopup></SigningPopup>
      <SignupPopup></SignupPopup>
    </div>
  );
}

export default App;
