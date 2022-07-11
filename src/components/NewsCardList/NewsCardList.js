import './NewsCardList.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import NewsCard from '../NewsCard/NewsCard';
import { searchResults, savedResults } from '../../utils/temp_storage';

function NewsCardList({isLoggedIn, isSectionVisible, isLoadingCards, isFoundCards, isErrorOccur, articles, savedArticles, keyword}) {
  const [articlesRendering, setArticlesRendering] = useState(3);
  const [isShowMoreVisible, setIsShowMoreVisible] = useState(true);
  const currPath = useLocation().pathname;

  useEffect(()=> {
    setArticlesRendering(3);
    setIsShowMoreVisible(true);
  }, [articles]);

  function handleShowMoreArticles() {
    setArticlesRendering(articlesRendering + 3);
    if(articlesRendering >= articles.length - 3) {
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
              savedArticles.map((cardElement, index) => <NewsCard key={index} card={cardElement} isLoggedIn={isLoggedIn} keyword={keyword} savedArticles={savedArticles}/>)
            }
            </div>
          </section>:    
          <section className="news-list page__wrapper">
            <>
            { isLoadingCards ?
              <Preloader />
              :
              <>
              {!isErrorOccur ? 
                <>
                {isFoundCards ?
                  <>
                      <h2 className='news-list__title'>Search results</h2>
                      <div className='news-list__container'>
                      {
                          articles.slice(0, articlesRendering).map((cardElement, index) => <NewsCard key={index} card={cardElement} isLoggedIn={isLoggedIn} keyword={keyword} savedArticles={savedArticles}/>)
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
                </>:
                <p className='news-list__not-found-text'>Sorry, something went wrong during the request.<br />There may be a connection issue or the server may be down.<br />Please try again later.</p>
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