import './Main.css';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main() {
    return (
      <main className="main">
        <Header />
        <NewsCardList />
        <About />
        <Footer />
      </main>
    );
  }
  
  export default Main;