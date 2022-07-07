import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({isCardsSectionVisible, isLoadingCards}) {
    return (
      <main>
          <SavedNewsHeader />
          <NewsCardList isSectionVisible={isCardsSectionVisible} isLoadingCards={isLoadingCards}/>
      </main>
    );
  }
  
  export default SavedNews;