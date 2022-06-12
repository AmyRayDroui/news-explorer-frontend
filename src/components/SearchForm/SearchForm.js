import './SearchForm.css';

function SearchForm() {
    return (
      <div className="search-form">
          <input type='text' className="search-form__input" placeholder='Enter topic'></input>
          <button className="search-form__button">Search</button>
      </div>
    );
  }
  
  export default SearchForm;