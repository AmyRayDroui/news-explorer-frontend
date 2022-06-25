import './NewsCardList.css';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import NewsCard from '../NewsCard/NewsCard';
import { searchResults, savedResults } from '../../utils/temp_storage';

function NewsCardList() {
    const currPath = useLocation().pathname;
    const found = true;
    return (
      <>
      { currPath==='/saved-news' ? 
        <section className="news-list news-list_type_saved page__wrapper">
          <div className='news-list__container'>
          {
            savedResults.map((cardElement, index) => <NewsCard key={index} card={cardElement} />)
          }
          </div>
        </section>:
        <section className="news-list page__wrapper">
        {/*<Preloader />*/}
        {found ?
            <>
                <h2 className='news-list__title'>Search results</h2>
                <div className='news-list__container'>
                {
                    searchResults.map((cardElement, index) => <NewsCard key={index} card={cardElement} />)
                }
                </div>
                <button className='news-list__show-more'>Show more</button>
            </>
            :
            <>
              <div className='news-list__not-found-icon'></div>
              <h2 className='news-list__title news-list__title_type_not-found'>Nothing found</h2>
              <p className='news-list__not-found-text'>Sorry, but nothing matched your search terms.</p>
            </>
        }
      </section>
      }
      </>
    );
  }
  
  export default NewsCardList;