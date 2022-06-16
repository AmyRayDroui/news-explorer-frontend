import './Main.css';
import Header from '../Header/Header';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main() {
    return (
      <main className="main">
        <Header />
        <NewsCardList />
        <About />
      </main>
    );
  }
  
  export default Main;