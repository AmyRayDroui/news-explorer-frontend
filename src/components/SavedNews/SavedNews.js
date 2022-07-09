import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({isLoggedIn, isCardsSectionVisible, isLoadingCards}) {
    return (
      <main>
          <SavedNewsHeader />
          <NewsCardList isSectionVisible={isCardsSectionVisible} isLoggedIn={isLoggedIn} isLoadingCards={isLoadingCards}/>
      </main>
    );
  }
  
  export default SavedNews;