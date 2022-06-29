import './About.css';
import image from '../../images/about-author.jpg';

function About() {
    return (
      <section className="about page__wrapper">
        <img src={image} alt="author photo" className="about__image" />
        <div className="about__container">
            <h2 className="about__title">About the author</h2>
            <p className="about__text">This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know. 
            <br /><br />You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
        </div>
      </section>
    );
  }
  
  export default About;