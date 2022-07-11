import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from 'react';

function Login({onClose, isOpen, redirectOnClick}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    
      function handlePasswordChange(e) {
        setPassword(e.target.value);
    }


    return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={null} validInput={true} name="signin" title="Sign in" redirectText="Sign up" redirectOnClick={redirectOnClick} popupGeneralErrorMessage="This email is not available">
        <h4 className="popup__input-title">Email</h4>
        <input type="email" value={email} name="email" onChange={handleEmailChange} className="popup__input popup__input_type_email" id="signin-email-input" placeholder="Enter email" required minLength="5" maxLength="40"/>
        <span className="popup__error name-input-error">Error</span>
        <h4 className="popup__input-title">Password</h4>
        <input type="password" value={password} name="password" onChange={handlePasswordChange} className="popup__input popup__input_type_password" id="signin-password-input" placeholder="Enter password" required minLength="2" maxLength="40"/>
        <span className="popup__error info-input-error">Error</span>
    </ PopupWithForm>
    );
  }
  
  export default Login;