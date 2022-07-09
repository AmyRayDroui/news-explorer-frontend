import './NewsCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import mainApi from '../../utils/MainApi';
import markedBookmark from '../../images/icons/marked-bookmark-icon.svg'

function NewsCard({ card, isLoggedIn, keyword }) {
    const currPath = useLocation().pathname;
    const [ isSaved, setIsSaved] = useState(false);

    const date = new Date(card.publishedAt);
    const dateString = `${date.toLocaleString('default', {month: 'long'})} ${date.getDate()}, ${date.getFullYear()}`

    function handleSaveArticle() {
      if(isLoggedIn) {
        mainApi.addNewArticle({
          keyword: keyword,
          title: card.title,
          text: card.description,
          date: dateString,
          source: card.source.name,
          link: card.url,
          image: card.urlToImage
        });
      }
    }


    return (
      <div className="news-card">
        <div className="news-card__image" style={{ backgroundImage: `url(${card.urlToImage})` }}></div>
        { currPath==='/saved-news' ? 
        <>    
            <h4 className="news-card__bubble news-card__keyword">{keyword}</h4> 
            <button type="button" className="news-card__bubble news-card__button news-card__button_type_remove"></button>
            <p className="news-card__bubble news-card__button-hover-text">Remove from saved</p>
        </>:
        <>
            <button type="button" className="news-card__bubble news-card__button news-card__button_type_save"></button>
            { !isLoggedIn && <p className="news-card__bubble news-card__button-hover-text">Sign in to save articles</p>}
        </>
        }
        <div className="new-card__text-container">
            <p className="new-card__date">{dateString}</p>
            <h3 className="new-card__title">{card.title}</h3>
            <p className="new-card__text">{card.description}</p>
            <p className="new-card__source">{card.source.name}</p>
        </div>
      </div>
    );
  }
  
  export default NewsCard;