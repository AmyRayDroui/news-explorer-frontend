import './PopupWithForm.css';

function PopupWithForm({children, isOpen, onClose, onSubmit, validInput, name, title, redirectText, redirectOnClick, popupGeneralErrorMessage}) {
    return (
      <div className={`popup popup_type_${name} ${isOpen ? 'popup_visible' : ''}`}>
        <div className="popup__container">
          <button type="button" className="popup__close-button" onClick={onClose} aria-label="Close popup" />
          <h2 className="popup__title">{title}</h2>
          <form onSubmit={onSubmit} className="popup__form" name={name}>
            {children}
            <p className="popup__error popup__general-error-message">{popupGeneralErrorMessage}</p>
            <button type="submit" disabled={!validInput} className="popup__submit-button" aria-label="Submit">{title}</button>
          </form>
          <div className="popup__redirect">
            <p className="popup__redirect-text">or</p>
            <button className="popup__redirect-button" onClick={redirectOnClick}>{redirectText}</button>
          </div>
        </div> 
      </div>
    );
  }
  
  export default PopupWithForm;