import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from 'react';

function Register({onClose, isOpen, redirectOnClick}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={null} validInput={true} name="signup" title="Sign up" redirectText="Sign in" redirectOnClick={redirectOnClick} popupGeneralErrorMessage="This email is not available">
        <h4 className="popup__input-title">Email</h4>
        <input type="email" value={email} name="email" onChange={handleEmailChange} className="popup__input popup__input_type_email" id="signup-email-input" placeholder="Enter email" required minLength="5" maxLength="40"/>
        <span className="popup__error name-input-error">Error</span>
        <h4 className="popup__input-title">Password</h4>
        <input type="password" value={password} name="password" onChange={handlePasswordChange} className="popup__input popup__input_type_password" id="signup-password-input" placeholder="Enter password" required minLength="2" maxLength="40"/>
        <span className="popup__error info-input-error">Error</span>
        <h4 className="popup__input-title">username</h4>
        <input type="text" value={username} name="username" onChange={handleUsernameChange} className="popup__input popup__input_type_username" id="signup-username-input" placeholder="Enter your username" required minLength="2" maxLength="40"/>
        <span className="popup__error info-input-error">Error</span>
    </ PopupWithForm>
    );
  }
  
  export default Register;