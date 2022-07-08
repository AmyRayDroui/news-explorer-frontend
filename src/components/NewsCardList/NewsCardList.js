import './NewsCardList.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import NewsCard from '../NewsCard/NewsCard';
import { searchResults, savedResults } from '../../utils/temp_storage';

function NewsCardList({isSectionVisible, isLoadingCards, cards}) {
  const [articlesRendering, setArticlesRendering] = useState(3);
  const [isShowMoreVisible, setIsShowMoreVisible] = useState(true);
  const currPath = useLocation().pathname;
  const found = true;

  useEffect(()=> {
    setArticlesRendering(3);
    setIsShowMoreVisible(true);
  }, [cards]);

  function handleShowMoreArticles() {
    setArticlesRendering(articlesRendering + 3);
    if(articlesRendering >= cards.length) {
      setIsShowMoreVisible(false);
    }
  }

  return (
    <>
      { isSectionVisible && 
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
            <>
            { isLoadingCards ?
              <Preloader />
              :
              <>
              {found ?
                <>
                    <h2 className='news-list__title'>Search results</h2>
                    <div className='news-list__container'>
                    {
                        cards.slice(0, articlesRendering).map((cardElement, index) => <NewsCard key={index} card={cardElement} />)
                    }
                    </div>
                    <button onClick={handleShowMoreArticles} className={`news-list__show-more ${!isShowMoreVisible && 'news-list__show-mor_not-visible'}`}>Show more</button>
                </>
                :
                <>
                  <div className='news-list__not-found-icon'></div>
                  <h2 className='news-list__title news-list__title_type_not-found'>Nothing found</h2>
                  <p className='news-list__not-found-text'>Sorry, but nothing matched your search terms.</p>
                </>
              }
              </>
            }
            </>
          </section>
        }
      </>
      }
      </>
    );
  }
  
  export default NewsCardList;