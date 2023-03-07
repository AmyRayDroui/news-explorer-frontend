import "./SavedNews.css";
import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({
  isLoggedIn,
  onSaveArticle,
  onDeleteArticle,
  isCardsSectionVisible,
  isLoadingCards,
  savedArticles,
}) {
  return (
    <main>
      <SavedNewsHeader savedArticles={savedArticles} />
      <NewsCardList
        onSaveArticle={onSaveArticle}
        onDeleteArticle={onDeleteArticle}
        savedArticles={savedArticles}
        isSectionVisible={isCardsSectionVisible}
        isLoggedIn={isLoggedIn}
        isLoadingCards={isLoadingCards}
      />
    </main>
  );
}

export default SavedNews;
