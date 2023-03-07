import Popup from "../Popup/Popup";
import React from "react";

function RegisteredSuccessPopup({ onClose, isOpen, redirectOnClick }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose} name="success">
      <div className="popup__container popup__container_type_success">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
          aria-label="Close popup"
        />
        <h2 className="popup__title popup__title_type_success">
          Registration successfully completed!
        </h2>
        <button className="popup__redirect-button" onClick={redirectOnClick}>
          Sign in
        </button>
      </div>
    </Popup>
  );
}

export default RegisteredSuccessPopup;
