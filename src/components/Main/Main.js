import './Main.css';
import Header from '../Header/Header';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import SearchForm from '../SearchForm/SearchForm';

function Main({isLoggedIn, onSubmitSearch, onSaveArticle, onDeleteArticle, isCardsSectionVisible, isLoadingCards, isFoundCards, isErrorSearchOccur, articles, savedArticles, keyword}) {
    return (
      <main className="main">
        <SearchForm onSubmit={onSubmitSearch}/>
        <NewsCardList 
          isLoggedIn={isLoggedIn}
          onSaveArticle={onSaveArticle}
          onDeleteArticle={onDeleteArticle}
          isSectionVisible={isCardsSectionVisible} 
          isLoadingCards={isLoadingCards} 
          isFoundCards={isFoundCards} 
          isErrorOccur={isErrorSearchOccur}
          articles={articles}
          savedArticles={savedArticles}
          keyword={keyword}
        />
        <About />
      </main>
    );
  }
  
  export default Main;