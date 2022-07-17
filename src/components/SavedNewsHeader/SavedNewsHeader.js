import './SavedNewsHeader.css';
import React, { useEffect, useContext, useState } from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function SavedNewsHeader({savedArticles}) {
    const currentUser = useContext(CurrentUserContext);
    const [keywordsString, setKeywordsString] = useState('');
    useEffect(() => {
      if(!savedArticles) return;
      const keywordsObj = {};
      savedArticles.forEach(article => {
        const keyword = article.keyword
        if(keywordsObj[keyword]) {
          keywordsObj[keyword] += 1;
        } else {
          keywordsObj[keyword] = 1;
        }
      });
      const keywordsSorted = Object.keys(keywordsObj).sort(function(a,b){return keywordsObj[b]-keywordsObj[a]});
      const keywordsNum = keywordsSorted.length;
      if(keywordsNum < 4) {
        setKeywordsString(keywordsSorted.join(', '));
        return;
      }
      const shortKeywordString = `${keywordsSorted[0]}, ${keywordsSorted[1]}`;
      setKeywordsString(`${shortKeywordString}, and ${keywordsNum - 2} others`);

    }, [savedArticles]);
    
    return (
      <section className="news-header page__wrapper">
        <h5 className="news-header__page-location">Saved articles</h5>
        <h1 className="news-header__title">{currentUser.name}, you have {savedArticles.length} saved articles</h1>
        <h3 className="news-header__keyword-title">By keywords: <span className="news-header__keywords">{keywordsString}</span></h3>
      </section>
    );
  }
  
  export default SavedNewsHeader;