import { Children } from 'react';
import './Popup.css';

function Popup({children, isOpen, name}) {
    return (
      <div className={`popup popup_type_${name} ${isOpen ? 'popup_visible' : ''}`}>
        {children}
      </div>
    );
  }
  
  export default Popup;