import './NewsCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import markedBookmark from '../../images/icons/marked-bookmark-icon.svg'

function NewsCard({ card }) {
    const currPath = useLocation().pathname;
    const [ isSaved, setIsSaved] = useState(false);

    return (
      <div className="news-card">
        <div className="news-card__image" style={{ backgroundImage: `url(${card.link})` }}></div>
        { currPath==='/saved-news' ? 
        <>    
            <h4 className="news-card__bubble news-card__keyword">{card.keyword}</h4> 
            <button type="button" className="news-card__bubble news-card__button news-card__button_type_remove"></button>
            <p className="news-card__bubble news-card__button-hover-text">Remove from saved</p>
        </>:
        <>
            <button type="button" className="news-card__bubble news-card__button news-card__button_type_save"></button>
            <p className="news-card__bubble news-card__button-hover-text">Sign in to save articles</p>
        </>
        }
        <div className="new-card__text-container">
            <p className="new-card__date">{card.date}</p>
            <h3 className="new-card__title">{card.title}</h3>
            <p className="new-card__text">{card.text}</p>
            <p className="new-card__source">{card.source}</p>
        </div>
      </div>
    );
  }
  
  export default NewsCard;