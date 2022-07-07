import './Main.css';
import Header from '../Header/Header';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import SearchForm from '../SearchForm/SearchForm';

function Main({onSubmitSearch, isCardsSectionVisible, isLoadingCards, cards}) {
    return (
      <main className="main">
        <SearchForm onSubmit={onSubmitSearch}/>
        <NewsCardList isSectionVisible={isCardsSectionVisible} isLoadingCards={isLoadingCards} cards={cards}/>
        <About />
      </main>
    );
  }
  
  export default Main;