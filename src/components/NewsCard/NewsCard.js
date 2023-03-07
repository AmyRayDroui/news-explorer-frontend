import "./NewsCard.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function NewsCard({
  card,
  onSaveArticle,
  onDeleteArticle,
  isLoggedIn,
  keyword,
  savedArticles,
  onOpenSigningPopup,
}) {
  const currPath = useLocation().pathname;
  const [isSaved, setIsSaved] = useState(false);
  const [cardId, setCardId] = useState("");
  const date = new Date(card.publishedAt);
  const dateString = `${date.toLocaleString("default", {
    month: "long",
  })} ${date.getDate()}, ${date.getFullYear()}`;
  let articleObj = {
    keyword: "",
    title: "",
    text: "",
    date: "",
    source: "",
    link: "",
    image: "",
  };
  if (currPath === "/saved-news") {
    articleObj = {
      keyword: card.keyword,
      title: card.title,
      text: card.text,
      date: card.date,
      source: card.source,
      link: card.link,
      image: card.image,
    };
  } else {
    articleObj = {
      keyword: keyword,
      title: card.title,
      text: card.description,
      date: dateString,
      source: card.source.name,
      link: card.url,
      image: card.urlToImage,
    };
  }

  useEffect(() => {
    if (!isLoggedIn) {
      setIsSaved(false);
      return;
    }
    if (currPath === "/saved-news") {
      setIsSaved(true);
      setCardId(card._id);
    } else {
      savedArticles.forEach((article) => {
        if (article.link === articleObj.link) {
          setCardId(article._id);
          setIsSaved(true);
        }
      });
    }
  }, [isLoggedIn, savedArticles]);

  function handleArticleOpen() {
    window.open(articleObj.link);
  }

  async function handleButtonClick() {
    if (isLoggedIn) {
      if (isSaved) {
        if (cardId) {
          try {
            const res = await onDeleteArticle(cardId);
            if (res) {
              setCardId("");
              setIsSaved(false);
            }
          } catch (err) {
            alert("An Error had Occurred while trying to remove an article");
          }
        }
      } else {
        try {
          const res = await onSaveArticle(articleObj);
          if (res) {
            setCardId(res._id);
            setIsSaved(true);
          }
        } catch (err) {
          alert("An Error had Occurred while trying to add an article");
        }
      }
    } else {
      onOpenSigningPopup();
    }
  }

  return (
    <div className="news-card">
      <div
        className="news-card__image"
        style={{ backgroundImage: `url(${articleObj.image})` }}
      ></div>
      {currPath === "/saved-news" ? (
        <>
          <h4 className="news-card__bubble news-card__keyword">
            {articleObj.keyword}
          </h4>
          <button
            type="button"
            onClick={handleButtonClick}
            className="news-card__bubble news-card__button news-card__button_type_remove"
          ></button>
          <p className="news-card__bubble news-card__button-hover-text">
            Remove from saved
          </p>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={handleButtonClick}
            className={`news-card__bubble news-card__button news-card__button_type_save ${isSaved &&
              "news-card__button_type_saved"}`}
          ></button>
          {!isLoggedIn && (
            <p className="news-card__bubble news-card__button-hover-text">
              Sign in to save articles
            </p>
          )}
        </>
      )}
      <div className="new-card__text-container" onClick={handleArticleOpen}>
        <p className="new-card__date">{articleObj.date}</p>
        <h3 className="new-card__title">{articleObj.title}</h3>
        <p className="new-card__text">{articleObj.text}</p>
        <p className="new-card__source">{articleObj.source}</p>
      </div>
    </div>
  );
}

export default NewsCard;
