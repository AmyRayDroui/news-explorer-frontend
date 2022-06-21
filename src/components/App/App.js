import './App.css';
import { Routes, Route, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path='/saved-news' element={<SavedNews />} />
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
