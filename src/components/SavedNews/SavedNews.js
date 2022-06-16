import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews() {
    return (
      <main>
          <SavedNewsHeader />
          <NewsCardList />
      </main>
    );
  }
  
  export default SavedNews;