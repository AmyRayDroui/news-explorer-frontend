import './Header.css';
import SearchForm from '../SearchForm/SearchForm';

function Header() {
    return (
      <header className="header">
        <SearchForm></SearchForm>
      </header>
    );
  }
  
  export default Header;