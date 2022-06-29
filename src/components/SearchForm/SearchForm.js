import './SearchForm.css';
import Header from '../Header/Header';

function SearchForm() {
    return (
      <div className="search-form">
          <h1 className="search-form__title">What's going on in the world?</h1>
          <p className="search-form__text">Find the latest news on any topic and save them in your personal account.</p>
        <div className="search-form__container">
            <input type='text' className="search-form__input" placeholder='Enter topic'></input>
            <button className="search-form__button">Search</button>
        </div>
      </div>
    );
  }
  
  export default SearchForm;