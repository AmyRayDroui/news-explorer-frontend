import './Main.css';
import Header from '../Header/Header';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import SearchForm from '../SearchForm/SearchForm';

function Main({isLoggedIn, onSubmitSearch, onSaveArticle, isCardsSectionVisible, isLoadingCards, isFoundCards, isErrorSearchOccur, articles, keyword}) {
    return (
      <main className="main">
        <SearchForm onSubmit={onSubmitSearch}/>
        <NewsCardList 
          isLoggedIn={isLoggedIn}
          onSaveArticle={onSaveArticle}
          isSectionVisible={isCardsSectionVisible} 
          isLoadingCards={isLoadingCards} 
          isFoundCards={isFoundCards} 
          isErrorOccur={isErrorSearchOccur}
          articles={articles}
          keyword={keyword}
        />
        <About />
      </main>
    );
  }
  
  export default Main;