import PopupWithForm from "../PopupWithForm/PopupWithForm";
import useForm from '../../utils/useForm';

function Login({onClose, isOpen, redirectOnClick, setEmail, setPassword, globalError}) {
  const { values, handleChange, errors, isValid, resetForm } = useForm();

    function handleEmailChange(e) {
        setEmail(e.target.value);
        handleChange(e);
    }
    
      function handlePasswordChange(e) {
        setPassword(e.target.value);
        handleChange(e);
    }


    return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={null} resetForm={resetForm} isValid={isValid} name="signin" title="Sign in" redirectText="Sign up" redirectOnClick={redirectOnClick} globalError={globalError}>
        <h4 className="popup__input-title">Email</h4>
        <input type="email" value={values.email || ''} name="email" onChange={handleEmailChange} className="popup__input popup__input_type_email" id="signin-email-input" placeholder="Enter email" required minLength="5" maxLength="40"/>
        <span className="popup__error name-input-error">{errors.email ? errors.email : ''}</span>
        <h4 className="popup__input-title">Password</h4>
        <input type="password" value={values.password || ''} name="password" onChange={handlePasswordChange} className="popup__input popup__input_type_password" id="signin-password-input" placeholder="Enter password" required minLength="2" maxLength="40"/>
        <span className="popup__error info-input-error">{errors.password ? errors.password : ''}</span>
    </ PopupWithForm>
    );
  }
  
  export default Login;