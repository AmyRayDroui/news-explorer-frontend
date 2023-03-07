import React from "react";
import { useEffect } from "react";
import "./Popup.css";

function Popup({ children, isOpen, onClose, name }) {
  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlay}
      className={`popup popup_type_${name} ${isOpen ? "popup_visible" : ""}`}
    >
      {children}
    </div>
  );
}

export default Popup;
