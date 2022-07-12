import './PopupWithForm.css';
import Popup from '../Popup/Popup';

function PopupWithForm({children, isOpen, onClose, onSubmit, isValid, name, title, redirectText, redirectOnClick, globalError}) {
    return (
      <Popup isOpen={isOpen} name={name}>
        <div className="popup__container">
          <button type="button" className="popup__close-button" onClick={onClose} aria-label="Close popup" />
          <h2 className="popup__title">{title}</h2>
          <form onSubmit={onSubmit} className="popup__form" name={name}>
            {children}
            <p className="popup__error popup__general-error-message">{globalError}</p>
            <button type="submit" disabled={!isValid} className="popup__submit-button" aria-label="Submit">{title}</button>
          </form>
          <div className="popup__redirect">
            <p className="popup__redirect-text">or</p>
            <button className="popup__redirect-button" onClick={redirectOnClick}>{redirectText}</button>
          </div>
        </div> 
      </Popup>
    );
  }
  
  export default PopupWithForm;