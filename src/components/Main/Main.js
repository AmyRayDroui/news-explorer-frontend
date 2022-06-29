import './Main.css';
import Header from '../Header/Header';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import SearchForm from '../SearchForm/SearchForm';

function Main({isMobileNavOpen, onClosePopups}) {
    return (
      <main className="main">
        <SearchForm />
        <NewsCardList />
        <About />
      </main>
    );
  }
  
  export default Main;