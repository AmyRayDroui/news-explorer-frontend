import './NewsCardList.css';
import Preloader from '../Preloader/Preloader';
import NewsCard from '../NewsCard/NewsCard';
import searchResults from '../../utils/temp_storage';

function NewsCardList() {
    const found = true;
    return (
      <section className="news-list page__wrapper">
        {/*<Preloader />*/}
        {found ?
            <>
                <h2 className='news-list__title'>Search results</h2>
                <div className='news-list__container'>
                {
                    searchResults.map((cardElement) => <NewsCard card={cardElement} />)
                }
                </div>    
            </>
            :
            <h2 className='news-list__title news-list__title_type_not-found'>Nothing found</h2>
        }
      </section>
    );
  }
  
  export default NewsCardList;