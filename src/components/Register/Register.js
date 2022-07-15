import PopupWithForm from "../PopupWithForm/PopupWithForm";
import useForm from '../../utils/useForm';

function Register({onSubmit, onClose, isOpen, redirectOnClick, setEmail, setPassword, setName, globalError, isRegistrationSuccessful}) {
    const { values, handleChange, errors, isValid, resetForm } = useForm();

    function handleEmailChange(e) {
        setEmail(e.target.value);
        handleChange(e);
    }
    
    function handlePasswordChange(e) {
        setPassword(e.target.value);
        handleChange(e);
    }

    function handleNameChange(e) {
        setName(e.target.value);
        handleChange(e);
    }

    return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} resetForm={resetForm} isValid={isValid} name="signup" title="Sign up" redirectText="Sign in" redirectOnClick={redirectOnClick} globalError={globalError}>
        <h4 className="popup__input-title">Email</h4>
        <input type="email" value={values.email || ''} name="email" onChange={handleEmailChange} className="popup__input popup__input_type_email" id="signup-email-input" placeholder="Enter email" required minLength="5" maxLength="40"/>
        <span className="popup__error name-input-error">{errors.email ? errors.email : ''}</span>
        <h4 className="popup__input-title">Password</h4>
        <input type="password" value={values.password || ''} name="password" onChange={handlePasswordChange} className="popup__input popup__input_type_password" id="signup-password-input" placeholder="Enter password" required minLength="2" maxLength="40"/>
        <span className="popup__error info-input-error">{errors.password ? errors.password : ''}</span>
        <h4 className="popup__input-title">username</h4>
        <input type="text" value={values.name || ''} name="name" onChange={handleNameChange} className="popup__input popup__input_type_name" id="signup-name-input" placeholder="Enter your username" required minLength="2" maxLength="40"/>
        <span className="popup__error info-input-error">{errors.name ? errors.name : ''}</span>
    </ PopupWithForm>
    );
  }
  
  export default Register;