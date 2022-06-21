import './SavedNewsHeader.css';
import Navigation from '../Navigation/Navigation';

function SavedNewsHeader() {
    const ownerName="Elise"
    const numberArticles=5
    return (
      <header className="news-header">
        <Navigation />
        <div className="news-header__container page__wrapper">
            <h5 className="news-header__page-location">Saved articles</h5>
            <h1 className="news-header__title">{ownerName}, you have {numberArticles} saved articles</h1>
            <h3 className="news-header__keyword-title">By keywords: <span className="news-header__keywords">Nature, Yellowstone, and 2 other</span></h3>
        </div>
      </header>
    );
  }
  
  export default SavedNewsHeader;