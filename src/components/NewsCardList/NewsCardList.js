import './NewsCardList.css';
import Preloader from '../Preloader/Preloader';

function NewsCardList() {
    const found = true;
    return (
      <section className="news-list page__wrapper">
        {/*<Preloader />*/}
        {found ?
            <h2 className='news-list__title'>Search results</h2>
            :
            <h2 className='news-list__title news-list__title_type_not-found'>Nothing found</h2>
        }
      </section>
    );
  }
  
  export default NewsCardList;