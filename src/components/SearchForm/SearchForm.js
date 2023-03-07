import "./SearchForm.css";
import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ onSubmit, keyword }) {
  const inputRef = useRef();
  const currPath = useLocation().pathname;

  useEffect(() => {
    inputRef.current.value = keyword;
  }, [currPath]);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputRef.current.value) {
      onSubmit({
        keyword: inputRef.current.value,
      });
    }
  }

  return (
    <div className="search-form">
      <h1 className="search-form__title">What's going on in the world?</h1>
      <p className="search-form__text">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form onSubmit={handleSubmit} className="search-form__container">
        <input
          type="text"
          ref={inputRef}
          className="search-form__input"
          placeholder="Enter topic"
        ></input>
        <button
          type="submit"
          className="search-form__button"
          aria-label="Submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
