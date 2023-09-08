import React, { useState, useEffect } from 'react';

interface ToastPropTypes {
  message: string;
  onClose: () => void;
}

export const Toast = ({ message, onClose }: ToastPropTypes) => {
  const [showToast, setShowToast] = useState(true);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast ${showToast ? 'd-flex' : 'd-none'}`}>
      <p className="toast-message">{message}</p>
      <span onClick={handleCloseToast} className="toast-close-btn">
        &times;
      </span>
    </div>
  );
};
